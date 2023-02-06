import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    drop: ['console', 'debugger'],
  },
  build: {
    lib: {
      entry: 'main.ts',
      name: 'bangumi-title-parser',
      fileName: 'index',
    },
  },
});
