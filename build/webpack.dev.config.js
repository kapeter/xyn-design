const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),

    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'index.js'
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(scss|css|less)/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'less-loader'
                    ],
                    publicPath: '../'
                })
            },
            {
                test: /\.(png|jpe?g|gif)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    limit: 10000,
                    name: 'img/[name].[ext]'
                }
            },
            {
                test: /\.(svg|woff|eot|ttf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    name: 'font/[name].[ext]',
                    limit: 10
                }
            },
            {
                test: /\.(mp3)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    name: 'audio/[name].[ext]',
                    limit: 10
                }
            },
            {
                test: /\.(pdf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    name: 'file/[name].[ext]',
                    limit: 10
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
        new webpack.ProvidePlugin({
            Promise: 'promise-polyfill'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        historyApiFallback: true,
        host: 'localhost',
        disableHostCheck: true,
        hot: true
    },

    devtool: 'source-map'
}