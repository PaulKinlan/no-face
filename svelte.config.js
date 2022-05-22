//import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { defineConfig } from 'vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    vite: defineConfig({
      optimizeDeps: {
        esbuildOptions: {

        },
        exclude: ["@tensorflow-models/face-detection", "@tensorflow-models/face-detection.js"],
      },
      esbuild: {
        exclude: ["@tensorflow-models/face-detection"],
        format: "esm",
        minify: false
      }
    })
  }
};

export default config;
