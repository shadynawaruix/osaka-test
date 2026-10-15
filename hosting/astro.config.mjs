import {defineConfig} from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';
import {resolve, dirname} from "path";
import {fileURLToPath} from 'url';
import tsConfig from "./tsconfig.json";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function buildAlias() {
    const result = {};
    for (const [tsAlias, paths] of Object.entries(tsConfig.compilerOptions.paths)) {
        // "./src/scripts/*"
        let path = String(paths[0]);

        // "./src/scripts"
        path = path.replace("/*", "");

        // absolute path
        path = resolve(__dirname, path);

        // "@scripts/*" -> "@scripts"
        const alias = tsAlias.replace("/*", "");

        result[alias] = path;
    }

    return result;
}

// https://astro.build/config
export default defineConfig({

    // Enable to use SSR.
    // output: 'server',

    // Enable Vue to support Vue components.
    integrations: [vue({appEntrypoint: '/src/App.ts'}), tailwind()],
    vite: {
        resolve: {
            alias: buildAlias(),
        },
    }
});
