#!/usr/bin/env node
/**
 * Automated Changeset creator
 *
 * - Detects single-package vs monorepo
 * - If multiple workspace packages and no target is given → bumps all
 */

import { writeFileSync, mkdirSync, readFileSync } from "fs";
import { randomUUID } from "crypto";
import { createRequire } from "module";
import { fileURLToPath } from "url";
import path from "path";
import { glob } from "tinyglobby";

const require = createRequire(import.meta.url);
const rootPkg = require("../package.json");

// --- Arguments ---
const bumpType = process.argv[2] || "patch";      // patch | minor | major
const description = process.argv[3] || "Automated version bump";
const targetPackage = process.argv[4];            // optional: bump only this package

// --- Paths ---
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.join(__dirname, "..");
const changesetDir = path.join(repoRoot, ".changeset");

// --- Ensure .changeset exists ---
mkdirSync(changesetDir, { recursive: true });

// --- Detect workspaces ---
let workspaces = [];
if (rootPkg.workspaces) {
  if (Array.isArray(rootPkg.workspaces)) {
    workspaces = rootPkg.workspaces;
  } else if (rootPkg.workspaces.packages) {
    workspaces = rootPkg.workspaces.packages;
  }
}

// --- Helper: find all workspace package names ---
async function getWorkspacePackageNames() {
  const patterns = workspaces.length ? workspaces : [];
  const packageNames = [];

  for (const pattern of patterns) {
    const dirs = await glob(pattern, { cwd: repoRoot, absolute: true });
    for (const dir of dirs) {
      try {
        const pkgPath = path.join(dir, "package.json");
        const pkgData = JSON.parse(readFileSync(pkgPath, "utf8"));
        if (pkgData.name) packageNames.push(pkgData.name);
      } catch {
        // ignore folders without package.json
      }
    }
  }
  return packageNames;
}

// --- Main ---
(async () => {
  let contents = "";

  if (workspaces.length === 0) {
    // Single-package repo → no name needed
    contents = `---
${bumpType}
---

${description}
`;
  } else {
    // Monorepo
    const packageNames = await getWorkspacePackageNames();

    if (targetPackage) {
      // Bump only the specified package
      if (!packageNames.includes(targetPackage)) {
        console.error(`❌ Package '${targetPackage}' not found in workspaces.`);
        console.error("Available packages:", packageNames);
        process.exit(1);
      }
      contents = `---
"${targetPackage}": ${bumpType}
---

${description}
`;
    } else {
      // No package specified → bump all detected packages
      contents = "---\n";
      for (const pkgName of packageNames) {
        contents += `"${pkgName}": ${bumpType}\n`;
      }
      contents += "---\n\n" + description + "\n";
    }
  }

  const filePath = path.join(changesetDir, `${randomUUID()}.md`);
  writeFileSync(filePath, contents);
  console.log(`✅ Created changeset (auto bump): ${filePath}`);
})();
