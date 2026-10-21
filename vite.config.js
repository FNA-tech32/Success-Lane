import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { fileURLToPath, URL } from 'node:url';

const src = fileURLToPath(new URL('./src', import.meta.url));

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['macros'],
      },
    }),
    svgr(),
  ],
  resolve: {
    alias: [
      { find: 'components', replacement: `${src}/components` },
      { find: 'config', replacement: `${src}/config` },
      { find: 'pages', replacement: `${src}/pages` },
      { find: 'utils', replacement: `${src}/utils` },
      { find: 'theme', replacement: `${src}/theme` },
      { find: 'registerServiceWorker', replacement: `${src}/registerServiceWorker.js` },
      { find: /^path$/, replacement: 'path-browserify' },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['import', 'global-builtin', 'legacy-js-api'],
      },
    },
  },
  esbuild: {
    include: /src[\\/].*\.js$/,
    exclude: [],
    loader: 'jsx',
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  server: {
    port: 3000,
  },
});
