'use strict';
const path                     = require('path')
const webpack                  = require('webpack');
const { merge }                = require('webpack-merge'); //new syntax
const CssMinimizerPlugin       = require('css-minimizer-webpack-plugin'); //new replacement plugin for optimize-css
const MiniCSSExtractPlugin     = require('mini-css-extract-plugin');
const UglifyJSPlugin           = require('terser-webpack-plugin');
const CompressionPlugin        = require('compression-webpack-plugin');
const helpers                  = require('./helpers');
const commonConfig             = require('./webpack.config.common');
const isProd                   = process.env.NODE_ENV === 'production';
const environment              = isProd ? require('./env/prod.env') : require('./env/staging.env');
const CopyWebpackPlugin        = require('copy-webpack-plugin');
const outputFileName           = `js/[name]${isProd ? '.[contenthash:8]' : ''}.js`


const webpackConfig = merge(commonConfig, {
    mode: 'production',
    output: {
        path: helpers.root('docs'),
        publicPath: '/spinalcord/',
        filename: outputFileName,
        chunkFilename: outputFileName
    },
    optimization: {
        runtimeChunk: 'single',
        minimizer: [
            new CssMinimizerPlugin(),
            new UglifyJSPlugin({
                parallel: true,
            })
        ],
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: false,
                  },
                styles: {
                    test: /\.css$/,
                    name: 'styles',
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
    plugins: [
        new webpack.EnvironmentPlugin(environment),
        new MiniCSSExtractPlugin({
            filename: 'css/[name].[contenthash].css',       // hash->contenthash new supported syntax
            chunkFilename: 'css/[id].[contenthash].css'
        }),
        new CompressionPlugin({
            filename: '[path][base].gz',
            algorithm: 'gzip',
            test: new RegExp('\\.(js|css)$'),
            threshold: 10240,
            minRatio: 0.8
        }),
        // copy custom static assets
        new CopyWebpackPlugin(
            {patterns: [
              {
                from: path.resolve(__dirname, '../src/static'),
                to: environment.assetsPublicPath,
                globOptions: {
                  ignore: ['.*'],
                },
              },
            ],}
        )
        ]
    });

if (!isProd) {
    webpackConfig.devtool = 'source-map';

    if (process.env.npm_config_report) {
        const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
        webpackConfig.plugins.push(new BundleAnalyzerPlugin());
    }
}

module.exports = webpackConfig;
