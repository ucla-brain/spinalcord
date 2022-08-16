'use strict';
const paths = require('./paths');   //helper path file
const { merge }                = require('webpack-merge'); //new syntax
const commonConfig         = require('./webpack.config.common');



const webpackConfig = merge(commonConfig, {
    mode: 'development',

    devtool: 'inline-source-map', //cheap module eval update
   
    devServer: {
        compress: true,
        historyApiFallback: true,
        static: paths.src,
        hot: true,
        open: true,
        port: 8000,
    },

    watchOptions: {     //for no file watching size errors
        ignored: ['**/node_modules', '**/docs']
      },
});

module.exports = webpackConfig;