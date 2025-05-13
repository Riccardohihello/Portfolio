import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      'three': 'three'
    }
  },
  assetsInclude: ['**/*.pdf'],
  base: '/Portfolio/',
  build: {
    outDir: 'dist',
    commonjsOptions: {
      strictRequires: true,
      transformMixedEsModules: true
    },
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
});
