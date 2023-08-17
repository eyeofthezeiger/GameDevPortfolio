import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/GameDevPortfolio/', // Update this to match your GitHub Pages repository name
  build: {
    outDir: 'dist', // The directory where the production build will be generated
    assetsDir: '', // Relative path for asset files (e.g., images, fonts)
    sourcemap: true, // Enable source maps for debugging
  },
});
