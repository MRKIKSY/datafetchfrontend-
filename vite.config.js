import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from 'tailwindcss'; // Import Tailwind CSS here

export default defineConfig({
  plugins: [react()],
  base: 'https://privateinboxapp.onrender.com',
  css: {
    postcss: {
      plugins: [tailwindcss], // Use the imported tailwindcss plugin
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});





