const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = ({outputFile, assetFile}) => ({
    mode:'development',
    devtool: false,
    entry: {app: './src/index.js',sub: './src/sub.js'},
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: `${outputFile}.js`
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
                test: /\.(png|jpe?g|gif|svg|woff2?|ttf|eot)$/,
                generator: {
                        filename: `images/${assetFile}[ext][query]`,
                }, 
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `${outputFile}.css`
        }),
        new ESLintPlugin({
            extensions: ['.js'],
            exclude: 'node_modules',
            fix: true
        })
    ]
})
