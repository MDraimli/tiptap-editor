import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    exclude: ['jquery'],
  },
  build: {
    rollupOptions: {
      external: ['jquery']
    }
  }
});