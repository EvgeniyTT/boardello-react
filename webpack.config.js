const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';

const buildPath = path.join(__dirname, './build');
const srcPath = path.join(__dirname, './src');

// Common plugins
const plugins = [
  new webpack.DefinePlugin({
    NODE_ENV: JSON.stringify(nodeEnv),
  }),
  new webpack.NamedModulesPlugin(),
  new HtmlWebpackPlugin({
    template: path.join(__dirname, 'index.html'),
    path: buildPath,
    filename: 'index.html',
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [
        autoprefixer({
          browsers: [
            'last 3 version',
            'ie >= 10',
          ],
        }),
      ],
      context: srcPath,
    },
  }),
];

const devLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader',
];

// Common rules
const rules = [
  {
    test: /\.(ttf|eot)(.*)?$/,
    loader: 'file-loader?limit=100000&name=fonts/[name].[ext]',
  },
  {
    test: /\.(woff|woff2)(\?\S*)?$/,
    loader: 'url-loader?limit=100000&name=fonts/[name].[ext]',
  },
  {
    test: /\.(png|jpg|jpeg|gif|svg)(\?\S*)?$/,
    loader: 'url-loader?limit=100000&name=images/[name].[ext]',
  },
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [
      'babel-loader',
    ],
  }, {
    test: /\.json$/,
    use: [
      'json-loader',
    ],
  }, {
    test: /\.(css|scss)$/,
    loader: ExtractTextPlugin.extract({
      fallbackLoader: 'style-loader',
      loader: devLoaders,
    }),
  },
];

plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new ExtractTextPlugin('bundle-[hash].css')
);

module.exports = {
  devtool: isProduction ? 'eval' : 'source-map',
  context: srcPath,
  entry: {
    app: './index.js',
  },
  output: {
    path: buildPath,
    publicPath: '/',
    filename: '[name]-bundle-[hash].js',
  },
  module: {
    rules,
  },
  resolve: {
    alias: {
      actions: path.resolve(__dirname, 'src/actions'),
      components: path.resolve(__dirname, 'src/components'),
      containers: path.resolve(__dirname, 'src/containers'),
      reducers: path.resolve(__dirname, 'src/reducers'),
      constants: path.resolve(__dirname, 'src/constants'),
      utils: path.resolve(__dirname, 'src/utils'),
      config: path.resolve(__dirname, 'src/config'),
    },
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx', '.json'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      srcPath,
    ],
  },
  plugins,
  devServer: {
    noInfo: false,
    open: false,
    hot: !isProduction,
    inline: !isProduction,
    stats: {
      colors: true,
      hash: true,
      version: true,
      timings: true,
      assets: true,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: true,
      errorDetails: true,
      warnings: true,
      publicPath: false,
    },
    port: 3000,
    historyApiFallback: true,
    contentBase: isProduction ? './build' : './src',
  },
};
