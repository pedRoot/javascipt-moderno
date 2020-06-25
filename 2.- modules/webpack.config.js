// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const basePath = __dirname;
const distPath = 'dist';
const webpackInitConfig = {
    mode: 'development',
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.js']
    },
    entry: {
        app: ['./src/index.js'],
    },
    output: {
        path: path.join(basePath, distPath),
        filename: '[chunkhash].js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Modules',
        filename: 'index.html'
      })
    ]
};

module.exports = webpackInitConfig;