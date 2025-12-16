import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    // use esbuild for minification (no extra dependency required)
    minify: 'esbuild',
    esbuild: {
      drop: ['console']
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) return 'vendor';
          }
        },
      },
    },
  },
  server: {
    port: 3000,
    strictPort: true,
  },
})
