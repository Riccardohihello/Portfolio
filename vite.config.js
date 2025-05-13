import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Portfolio/', 

  build: {
    rollupOptions: {
    }
  },
   plugins: [three()] 
});
