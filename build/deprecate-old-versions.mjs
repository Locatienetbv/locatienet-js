#!/usr/bin/env node
/**
 * Deprecate old npm versions for all workspace packages
 */

import { createRequire } from "module";
import { fileURLToPath } from "url";
import path from "path";
import { execSync } from "child_process";
import { readFileSync } from "fs";
import semver from "semver";

const require = createRequire(import.meta.url);

// --- Paths ---
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.join(__dirname, "..");
const rootPkg = require(path.join(repoRoot, "package.json"));

// --- Detect workspaces ---
let workspaces = [];
if (rootPkg.workspaces) {
  if (Array.isArray(rootPkg.workspaces)) {
    workspaces = rootPkg.workspaces;
  } else if (rootPkg.workspaces.packages) {
    workspaces = rootPkg.workspaces.packages;
  }
}

// --- Helper to get package.json path from workspace ---
function getWorkspacePackageJsonPaths() {
  return workspaces.flatMap(pattern => {
    // resolve glob patterns manually using glob.sync
    const glob = require("glob");
    const dirs = glob.sync(pattern, { cwd: repoRoot, absolute: true });
    return dirs.map(d => path.join(d, "package.json"));
  });
}

// --- Deprecate old versions ---
function deprecateOldVersions(pkgPath) {
  const pkg = require(pkgPath);
  const pkgName = pkg.name;
  const currentVersion = pkg.version;

  console.log(`\n🔹 Checking package: ${pkgName} (current: ${currentVersion})`);

  let publishedVersions;
  try {
    publishedVersions = JSON.parse(
      execSync(`npm view ${pkgName} versions --json`, { stdio: ["pipe", "pipe", "ignore"] }).toString()
    );
  } catch (err) {
    console.warn(`⚠️ Could not fetch versions for ${pkgName}, skipping.`);
    return;
  }

  const oldVersions = publishedVersions.filter(v => semver.lt(v, currentVersion));
  if (oldVersions.length === 0) {
    console.log("✅ No old versions to deprecate.");
    return;
  }

  for (const v of oldVersions) {
    try {
      console.log(`Deprecating ${pkgName}@${v}`);
      execSync(`npm deprecate ${pkgName}@${v} "Deprecated: please use ${currentVersion}+"`, {
        stdio: "inherit"
      });
    } catch (err) {
      console.error(`❌ Failed to deprecate ${pkgName}@${v}`);
    }
  }
}

// --- Run for all workspace packages ---
const pkgJsonPaths = getWorkspacePackageJsonPaths();
if (pkgJsonPaths.length === 0) {
  console.error("❌ No workspace packages found.");
  process.exit(1);
}

for (const pkgPath of pkgJsonPaths) {
  deprecateOldVersions(pkgPath);
}

console.log("\n🎉 Finished deprecating old versions.");
