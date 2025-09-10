import { defineConfig } from "rollup";
import { createRollupConfig } from '../../build/rollup.config.shared.mjs';
import path from "node:path";

const distDir = path.resolve('./dist');

const sharedGlobals = {
    leaflet: "L",
    "@locatienet/shared": "shared",
    "@locatienet/api-client": "LocatienetApiClient"
    
};

export default defineConfig([
    createRollupConfig({
        input: "src/index.ts",
        outputFile: path.join(distDir, "leaflet-tilelayer.js"),
        name: "L.LocatienetTilelayer",
        minified: false,
        external: ["leaflet"],
        globals: sharedGlobals
    }),
    createRollupConfig({
        input: "src/index.ts",
        outputFile: path.join(distDir, "leaflet-tilelayer.min.js"),
        name: "L.LocatienetTilelayer",
        minified: true,
        external: ["leaflet"],
        globals: sharedGlobals
    })
]);
