import { defineConfig } from "rollup";
import { createRollupConfig } from '../../build/rollup.config.shared.mjs';
import path from "node:path";

const distDir = path.resolve('./dist');

const sharedGlobals = {
    leaflet: "L"
};

export default defineConfig([
    createRollupConfig({
        input: "src/index.ts",
        outputFile: path.join(distDir, "leaflet-routing.js"),
        name: "L.Routing.locatienet",
        minified: false,
        external: ["leaflet"],
        globals: sharedGlobals
    }),
    createRollupConfig({
        input: "src/index.ts",
        outputFile: path.join(distDir, "leaflet-routing.min.js"),
        name: "L.Routing.locatienet",
        minified: true,
        external: ["leaflet"],
        globals: sharedGlobals
    })
]);
