const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode:'development',
    devtool: false,
    entry: path.join(__dirname, '/src','index.js'),
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: [ 
                    //'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|png|jpe?g|gif|svg|woff2?|ttf|eot)$/,
                generator: {
                        filename: 'images/[name][ext][query]',
                }, 
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body'
        }),
        new ESLintPlugin({
            extensions: ['.js'],
            exclude: 'node_modules',
            fix: true
        })
    ]
}
