// rollup.config.shared.mjs
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import * as sass from "sass";
import postcss from "postcss";
import autoprefixer from "autoprefixer";
import fs from "node:fs/promises";
import fsSync from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import banner from './banner.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// --- Sass compilation ---
export async function compileSass(inputFile, outputFile, minified = false) {
 // console.log(`[debug] Compiling Sass: ${inputFile} → ${outputFile}, minified=${minified}`);
  const result = sass.compile(inputFile, {
    style: minified ? "compressed" : "expanded",
    loadPaths: [
      path.resolve(__dirname, "../node_modules"),
      path.resolve(process.cwd(), "node_modules"),
    ],
    silenceDeprecations: ["mixed-decls", "color-functions", "global-builtin", "import"],
  });

  const processed = await postcss([autoprefixer()]).process(result.css, { from: undefined });
  await fs.mkdir(path.dirname(outputFile), { recursive: true });
  await fs.writeFile(outputFile, processed.css);
  //console.log(`[debug] Sass compiled: ${outputFile}`);
}

// --- Plugins ---
export function createPlugins({ minified = false } = {}) {
  const plugins = [
    nodeResolve({ browser: true, preferBuiltins: false }),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json", sourceMap: true, declaration: true })
  ];

  if (minified) plugins.push(terser());
  return plugins;
}

// --- Gather asset folders ---
export function getAllAssetFolders() {
  const repoRoot = path.resolve(__dirname, "../");
  const folders = [];

  //console.log(`[debug] Scanning repo root for assets: ${repoRoot}`);

  // Root assets
  const rootAssets = path.join(repoRoot, "assets");
  if (fsSync.existsSync(rootAssets)) {
    folders.push("assets");
    //console.log(`[debug] Found root assets: ${rootAssets}`);
  }

  // Packages assets
  const packagesDir = path.join(repoRoot, "packages");
  if (fsSync.existsSync(packagesDir)) {
    const packages = fsSync.readdirSync(packagesDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    for (const pkgName of packages) {
      const pkgAssets = `packages/${pkgName}/assets`;
      const pkgAssetsFull = path.join(repoRoot, pkgAssets);
      if (fsSync.existsSync(pkgAssetsFull)) {
        folders.push(pkgAssets);
        //console.log(`[debug] Found package assets: ${pkgAssetsFull}`);
      }
    }
  }

  //console.log(`[debug] All detected asset folders:`, folders);
  return folders;
}

// --- Copy assets into dist ---
export async function copyAssetsToDist(distDir) {
  const repoRoot = path.resolve(__dirname, "../");
  const assetFolders = getAllAssetFolders().map(f => path.join(repoRoot, f));

  //console.log(`[debug] Copying assets contents to dist: ${distDir}`);

  for (const folder of assetFolders) {
    if (fsSync.existsSync(folder)) {
      const items = await fs.readdir(folder, { withFileTypes: true });
      for (const item of items) {
        const src = path.join(folder, item.name);
        const dest = path.join(distDir, item.name);
        console.log(`[debug] Copying ${src} → ${dest}`);
        await fs.cp(src, dest, { recursive: true, force: false });
      }
    } else {
      console.warn(`[warn] Asset folder not found (skipping): ${folder}`);
    }
  }

  //console.log(`[debug] Asset contents copied successfully`);
}


// --- Rollup config ---
export function createRollupConfig({
  input,
  outputFile,
  name,
  minified = false,
  external = [],
  globals = {},
  isSass = false,
  sassInput,
  sassOutput,
  addAssets = false
}) {
  return {
    input,
    output: {
      banner: banner(path.resolve('./')),
      file: outputFile,
      format: "umd",
      name,
      sourcemap: true,
      globals
    },
    external: id => external.some(pkg => id === pkg || id.startsWith(pkg + '/')),
    plugins: [
      ...createPlugins({ minified }),
      ...(isSass ? [{
        name: 'sass-plugin',
        buildStart: async () => {
          console.log(`[debug] Running sass-plugin for ${sassInput}`);
          await compileSass(sassInput, sassOutput, minified);
        }
      }] : []),
      ...(addAssets ? [{
        name: 'copy-assets-plugin',
        buildEnd: async () => {
          const distDir = path.dirname(outputFile);
          console.log(`[debug] Running copy-assets-plugin for ${distDir}`);
          await copyAssetsToDist(distDir);
        }
      }] : [])
    ]
  };
}
