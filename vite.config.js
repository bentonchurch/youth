import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/youth/', // must match your repo name
  build: {
    outDir: 'build',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        jakob: resolve(__dirname, 'jakob/index.html'),
        countryfacts: resolve(__dirname, 'CountryFacts/index.html'),
      }
    }
  }
})

