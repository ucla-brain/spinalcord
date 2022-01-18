'use strict';
const path                 = require('path');
const webpack              = require('webpack');
const merge                = require('webpack-merge');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const helpers              = require('./helpers');
const commonConfig         = require('./webpack.config.common');
const environment          = require('./env/dev.env');
const CopyWebpackPlugin    = require('copy-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');



const webpackConfig = merge(commonConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: helpers.root('docs'),
        publicPath: '/',
        filename: 'js/[name].bundle.js',
        chunkFilename: 'js/[id].chunk.js'
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new webpack.EnvironmentPlugin(environment),
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorsPlugin(),
        // copy custom static assets
    new CopyWebpackPlugin(
        {
            patterns: [
                { from: path.join(__dirname, '../static'), to: path.join(__dirname, '../dist/electron/static') },
              ],            
        //   { from: path.resolve(__dirname, '../src/static'), to: environment.assetsPublicPath }
        }
      ),
      new MiniCSSExtractPlugin({
        filename: 'css/[name].[hash].css',
        chunkFilename: 'css/[id].[hash].css'
    }),
    ],
    devServer: {
        compress: true,
        historyApiFallback: true,
        hot: true,
        open: true,
        overlay: true,
        port: 8000,
        stats: {
            normal: true
        }
    }
});

module.exports = webpackConfig;
