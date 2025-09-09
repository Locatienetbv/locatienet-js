import { defineConfig } from "rollup";
import { createRollupConfig } from '../../build/rollup.config.shared.mjs';
import path from "node:path";

const distDir = path.resolve('./dist');


const sharedGlobals = {
    leaflet: "L",
    "@locatienet/api-client": "LocatienetApiClient",
    bootstrap: "bootstrap"
};

export default defineConfig([
    createRollupConfig({
        input: "src/index.ts",
        outputFile: path.join(distDir, "leaflet-searchaddress.js"),
        name: "L.SearchAddress.Control",
        minified: false,
        external: ["leaflet"],
        globals: sharedGlobals,
        isSass: true,
        sassInput: "src/leaflet-searchaddress.scss",
        sassOutput: path.join(distDir, "leaflet-searchaddress.css"),
        addAssets: true

    }),
    createRollupConfig({
        input: "src/index.ts",
        outputFile: path.join(distDir, "leaflet-searchaddress.min.js"),
        name: "L.SearchAddress.Control",
        minified: true,
        external: ["leaflet"],
        globals: sharedGlobals,
        isSass: true,
        sassInput: "src/leaflet-searchaddress.scss",
        sassOutput: path.join(distDir, "leaflet-searchaddress.min.css")
        
    })
]);

