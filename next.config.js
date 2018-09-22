const withTypescript = require('@zeit/next-typescript');
const withOptimizedImages = require('next-optimized-images');
const path = require('path');

module.exports = withOptimizedImages(withTypescript({
  useFileSystemPublicRoutes: false,
  publicRuntimeConfig: {
    static: '/static'
  },
  webpack: function (config, { buildId, dev }) {
    const originalEntry = config.entry;

    config.resolve = {
      ...config.resolve,
      ...{
        alias: {
          ...config.resolve.alias,
          '@src': path.resolve(__dirname, 'pages'),
          '@static': path.resolve(__dirname, 'static'),
        }
      },
    };

    return config
  }
}));
