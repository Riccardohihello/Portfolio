import { defineConfig } from 'vite';
import * as THREE from 'three';

export default defineConfig({
  resolve: {
    alias: {
      'three': THREE,
    }
  },

  base: '/Portfolio/',
  build: {
    outDir: 'dist',
  }
});
