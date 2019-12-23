module.exports = config => {
  require('react-app-rewire-postcss')(config, {
    module: {
      rules: [
        {
          test: /\.pcss$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              }
            },
            {
              loader: 'postcss-loader'
            }
          ]
        }
      ]
    }
  });

  return config;
};
