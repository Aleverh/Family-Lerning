const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        // listeners: './src/listeners.js',
    },
    output: {
        filename: '[name].main.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: '[name][ext]'
    },
    module: {
        rules: [
            {
                test: /\.(sa|c)ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    devServer: {
        static: './dist'
    },
    plugins: [
        new Dotenv({
            path: './.env'
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
        }),
    ]
};