import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  define: {
    // Define your base URL here
    BASE_URL: JSON.stringify('https://uesrapp.onrender.com'),
  },
});
