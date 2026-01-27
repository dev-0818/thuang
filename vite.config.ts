import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/thuangarch/',
  build: {
    // Use esbuild minification (faster and built-in)
    minify: 'esbuild',
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Drop console and debugger in production
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue'],
        },
      },
    },
    // Enable gzip compression hint
    reportCompressedSize: true,
    // Optimize chunk size
    chunkSizeWarningLimit: 600,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['vue'],
  },
})
