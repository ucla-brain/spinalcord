'use strict';

const path = require('path');
const paths = require('./paths'); //helper path file
const webpack              = require('webpack');
const HtmlPlugin           = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDev                = process.env.NODE_ENV === 'development';
const isProd                   = process.env.NODE_ENV === 'production';
const environment              = isProd ? require('./env/prod.env') : require('./env/staging.env');

const { VueLoaderPlugin }      = require('vue-loader'); //new syntax
const { CleanWebpackPlugin } = require('clean-webpack-plugin');



const webpackConfig = {

    entry: {
        entry: ['whatwg-fetch', paths.src + '/main.js'],
    },

    resolve: {
        extensions: [ '.js', '.vue' ],
        alias: {
            'components': path.resolve(__dirname, '/src/components/'),
			'images': path.resolve(__dirname, '/src/static/'),
		    'assets': path.resolve(__dirname, '/src/assets/'),
        }
    },

    output: {
        path: paths.build,
        filename: 'js/[name].bundle.js',
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                include: [ paths.src ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [ paths.src ]
            },
            {
                test: /\.(scss|css|sass)$/,
                use: ['vue-style-loader',
                  {loader: 'css-loader', options: {sourceMap: true, importLoaders: 1}},
                ],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource'
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline'
            }
        ]
    },
    
    plugins: [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({ __VUE_OPTIONS_API__: true, __VUE_PROD_DEVTOOLS__: true }),
        new webpack.EnvironmentPlugin(environment),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({patterns: [{ from: path.resolve(__dirname, '../src/static'),to: environment.assetsPublicPath, globOptions: { ignore: ['.*'],},},],}),
        new HtmlPlugin({ template: 'index.html', filename: 'index.html' }),
    ]
};

module.exports = webpackConfig;
