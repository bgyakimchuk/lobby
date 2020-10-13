const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  const isProd = false;

  return {
    devtool: isProd ? 'none' : 'source-map',
    mode: isProd ? 'production' : 'development',
    watch: !isProd,
    entry: './src/index.js',
    output: {
      filename: isProd ? 'main.[hash].js' : 'main.js',
      path: path.resolve('./build'),
      publicPath: '/'
    },
    devServer: {
      historyApiFallback: true,
      compress: true,
      port: 3000
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
          exclude: /node_modules/,
          loader: 'file-loader',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: './index.html',
        favicon: './public/favicon.ico'
      }),
    ],
  };
};
