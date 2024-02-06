const path = require('path'); //path module from node.js. Allows us to use absolute path name
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'production',
    entry: './src/index.js',  //source
    output: {
        path: path.resolve(__dirname, '../public'), //allows us to use absolute path. Using dist folder as a directory
        filename: 'bundle.js',
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, '../public') //serving from here
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
        proxy: {
            '/api': 'http://localhost:5000'
        },
    },

    module: {
        rules: [
            {
                test: /\.css$/,  //means any file that ends with .css
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.js$/,  //means any file that ends with js
                exclude: /node_modules/, //prevent it from looking in node modules
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin()
    ],
};
