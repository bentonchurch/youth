export default {
  base: '/youth/',
  build: {
    outDir: 'build',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        jakob: 'Jakob.html'
      }
    }
  }
}
