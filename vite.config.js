import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      'three': 'three'
    }
  },

  base: '/Portfolio/',
  build: {
    outDir: 'dist',
  }
});
