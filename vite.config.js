import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  build: {
    outDir: 'example',
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/main.js'),
      name: 'Greeter',
      fileName: 'greeter-component',
      formats: ['iife'],
      fileName: () => 'greeter-component.js',

    },
    rollupOptions: {
      output: {
        globals: {
          vue: 'Vue',
        },
      },
      external: ['vue'], // don't bundle Vue, since you load it from CDN
    },
  },
})