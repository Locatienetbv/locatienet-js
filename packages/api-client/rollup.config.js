import { defineConfig } from "rollup";
import { createRollupConfig } from '../../build/rollup.config.shared.mjs';
import path from "node:path";

const distDir = path.resolve('./dist');

// rollup.config.js
export default defineConfig([
    createRollupConfig({
        input: "src/index.ts",
        outputFile: path.join(distDir, "api-client.esm.js"),
        name: "LocatienetApiClient",
        minified: false,
        format: "esm", 
        external: []
    }),
    createRollupConfig({
        input: "src/index.ts",
        outputFile: path.join(distDir, "api-client.js"),
        name: "LocatienetApiClient",
        minified: false,
        format: "umd", 
        external: []
    }),
    createRollupConfig({
        input: "src/index.ts",
        outputFile: path.join(distDir, "api-client.min.js"),
        name: "LocatienetApiClient",
        minified: true,
        format: "umd",
        external: []
    })
]);

