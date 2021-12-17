const path = require('path');

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
      },
    },
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      // load which style file you want to import globally
      patterns: [path.resolve(__dirname, './src/styles/_variables.scss')],
    },
  },
  // module: {
  //   rules: [{
  //     test: /\/.scss$/,
  //     loaders: ['style', 'css', 'sass'],
  //   }],
  // },
};
