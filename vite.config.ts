import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [dts()],
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
