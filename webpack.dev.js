const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { merge } = require('webpack-merge')
const commonConf = require('./webpack.common')
const outputFile = '[name]'
const assetFile = '[name]'

module.exports = () => merge(commonConf({outputFile, assetFile}), {
    mode:'development',
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname,"./public")
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body'
        }),
    ]
})
