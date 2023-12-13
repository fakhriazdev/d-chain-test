import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       src: '/src',
//     },
//   },
// });

export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    proxy: {
      // '/api': {
      //   target: 'http://localhost:8080',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace('^/api/', ''),
      // },
      '/api': {
        target: 'https://www.emsifa.com/api-wilayah-indonesia',
        changeOrigin: true,
        rewrite: (path) => path.replace('^/api/', ''),
      }
    }
  }
})