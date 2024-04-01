import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {},
    // This allows importing CSS from node_modules
    preprocessorOptions: {
      scss: {
        additionalData: `@import "bootstrap/dist/css/bootstrap.min.css";`
      }
    }
  }
});
