var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './dev/js/client.js',
    output: {
        path: path.resolve(__dirname, 'src'), // This is going to go to the root and create a folder colled src then it will put the bundle.js file in this folder
        filename: 'js/bundle.min.js'
        // publicPath: '/'
    },
    watch: true,
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        port: 9000,
        stats: 'minimal',
        inline: true,
        // hot: true,
        // historyApiFallback: true
        open: true
        // historyApiFallback: true,
        // publicPath: '/'
    },
    devtool: 'cheap-module-eval-source-map',

    module: {
        loaders: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    }
};
