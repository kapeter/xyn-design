const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    mode: "production",

    entry: path.resolve(__dirname, '../src/index.js'),

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/index.[hash].js'
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
                test: /\.(css|less)/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'less-loader'
                    ]
                })
            },
            {
                test: /\.(png|jpe?g|gif)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    limit: 10000,
                    name: 'img/[name].[ext]',
                    publicPath: '/'
                }
            },
            {
                test: /\.(svg|woff|eot|ttf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    name: 'font/[name].[ext]',
                    limit: 10,
                    publicPath: '/'
                },
            },
            {
                test: /\.(mp3)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    name: 'audio/[name].[ext]',
                    limit: 10,
                    publicPath: '/'
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new ExtractTextPlugin('css/[name].bundle.[hash].css'),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.ProvidePlugin({
            Promise: 'promise-polyfill'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html'
        })
    ]
}