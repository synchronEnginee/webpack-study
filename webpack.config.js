module.exports = {
    mode:'development',
    devtool: false,
    entry: { app: './src/index.js' },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [ 
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}
