const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const webpack = require('webpack')

module.exports = ({outputFile, assetFile}) => ({
    mode:'development',
    devtool: false,
    entry: {app: './src/js/index.js',sub: './src/js/sub.js'},
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
        }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            utils: [path.resolve(__dirname, 'src/js/utils'), 'default']
        })
    ],
    optimization: {
        splitChunks: {
          chunks: 'all',
          minSize: 0,
          cacheGroups: {
            defaultVendors: {
              name: "vendors",
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
              reuseExistingChunk: true,
            },
            default: {
              minChunks: 2,
              priority: -5,
              reuseExistingChunk: true,
            },
            utils: {
                name: 'utils',
                test: /src[\\/]js[\\/]utils[\\/]/,
                chunks: 'async'
            },
        },
    }   
    },
    resolve: {
        alias: {
            scss: path.resolve(__dirname, 'src/scss'),
            imgs: path.resolve(__dirname, 'src/images')
        },
        extensions: ['.js', 'scss'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    }
})
