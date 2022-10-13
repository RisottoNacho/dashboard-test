import { plugin } from "vite-plugin-elm"

export default {
  // Add elm plugin
  plugins: [plugin(), require('tailwindcss'),
  require('autoprefixer')],
  // Avoid annoying screen clear
  clearScreen: false,
  // Add server proxy in `/api/` route
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        //rewrite: (path) => path.replace(/^\/api/, '')
      },
    }, port: 5000,
  }
}
