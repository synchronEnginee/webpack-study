const path = require('path')

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
                use: [
                    'babel-loader',
                    'eslint-loader'
                ],
                options: {
                    fix: true
                }

            },
            {
                test: /\.scss$/,
                use: [ 
                    'style-loader',
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
    }
}
