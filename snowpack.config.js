module.exports = {
  mount: {
    '_site': { url: '/', static: true, resolve: false },
    'src/assets/img': { url: '/img' },
    'src/assets/css': { url: '/css' },
    'src/js/entrypoints': { url: '/js' },
  },
  plugins: [
    '@snowpack/plugin-postcss',
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'eleventy',
        watch: 'ELEVENTY_ENV=development $1 --watch',
      },
    ],
  ],
  // packageOptions: {
  //   NODE_ENV: true,
  //   source: 'remote',
  // },
  // buildOptions: {
  //   clean: true,
  //   out: 'dist',
  // },
  devOptions: {
    // open: 'none',
    hmr: true,
    hmrDelay: 200,
  },
  // optimize: {
  //   bundle: true,
  //   minify: true,
  //   target: 'es2020',
  // },
};