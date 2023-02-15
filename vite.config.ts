import { defineConfig, type UserConfigExport } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig(({ command }) => {
  const config: UserConfigExport = {
    plugins: [dts()],
    build: {
      lib: {
        entry: 'main.ts',
        name: 'bangumi-title-paerser',
        fileName: 'index',
      },
    },
  };

  if (command === 'build') {
    return {
      esbuild: {
        drop: ['console', 'debugger'],
      },
      ...config,
    };
  } else {
    return config;
  }
});
