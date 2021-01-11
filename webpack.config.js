const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                // Note: Order is from last to first (postcss-loader first, style-loader last)
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader', options: { importLoaders: 1 }
                    },
                    'postcss-loader'
                ]
            }
        ]
    },

    devServer: {
        watchContentBase: true,
        contentBase: path.resolve(__dirname, 'dist'),
        open: true
    }
}