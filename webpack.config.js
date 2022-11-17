const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/scripts/index.js',
    menu: './src/scripts/menu.js',
    privacy: './src/scripts/privacy.js',
    hometree: './src/scripts/hometree.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      filename: 'jobs.html',
      template: 'src/jobs.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'menu.html',
      template: 'src/menu.html',
      chunks: ['menu']
    }),
    new HtmlWebpackPlugin({
      filename: 'privacy.html',
      template: 'src/privacy.html',
      chunks: ['privacy']
    }),
    new HtmlWebpackPlugin({
      filename: 'hometree.html',
      template: 'src/hometree.html',
      chunks: ['hometree']
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
}
