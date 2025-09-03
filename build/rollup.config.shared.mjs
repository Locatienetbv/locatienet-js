// rollup.config.shared.mjs
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import * as sass from "sass";
import postcss from "postcss";
import autoprefixer from "autoprefixer";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import banner from './banner.mjs';

// Maak __dirname equivalent voor ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));


export async function compileSass(inputFile, outputFile, minified = false) {
    const result = sass.compile(inputFile, {
        style: minified ? "compressed" : "expanded",
        // Absoluut pad naar node_modules
        loadPaths: [
            path.resolve(__dirname, "../node_modules"),  // fix
            path.resolve(process.cwd(), "node_modules") // fallback, handig bij monorepo
        ],
        silenceDeprecations: [
            "mixed-decls",
            "color-functions",
            "global-builtin",
            "import",
        ],
    });

    const processed = await postcss([autoprefixer()]).process(result.css, { from: undefined });
    await fs.mkdir(path.dirname(outputFile), { recursive: true });
    await fs.writeFile(outputFile, processed.css);
}

export function createPlugins({ minified = false } = {}) {
    const plugins = [
        nodeResolve({ browser: true, preferBuiltins: false }),
        commonjs(),
        typescript({ tsconfig: "./tsconfig.json", sourceMap: true, declaration: true })
    ];
    if (minified) plugins.push(terser());
    return plugins;
}

export function createRollupConfig({
    input,
    outputFile,
    name,
    minified = false,
    external = [],
    globals = {},
    isSass = false,
    sassInput,
    sassOutput
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
                    await compileSass(sassInput, sassOutput, minified);
                }
            }] : [])
        ]
    };
}

