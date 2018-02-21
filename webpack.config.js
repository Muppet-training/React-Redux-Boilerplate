var path = require('path');
var webpack = require('webpack');

module.exports = {
    // devServer: {
    //     inline: true,
    //     contentBase: './src',
    //     port: 3000
    // },
    entry: './dev/js/index.js',
    // output: {
    //     path: path.resolve(__dirname, 'src'), // This is going to go to the root and create a flder colled public then it will put the bundle.js file in this folder
    //     filename: 'index_bundle.js'
    //     // publicPath: '/dist'
    // },
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'js/bundle.min.js'
    },
    watch: true,
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        port: 9000,
        stats: 'minimal',
        inline: true
        // hot: true,
        // historyApiFallback: true,
        // open: true
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
