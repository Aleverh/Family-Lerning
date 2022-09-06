const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: 'development',
    entry: {
        index: ['./src/js/views/viewRecipe.js', './src/js/controller.js', './src/js/model.js', './src/js/views/viewAllRecipes.js'],
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[name][ext]'
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
                exclude: /\.module\.css$/,
            },
            {
                test: /\.html$/,
                use: 'html-loader'
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
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
        }),
    ]
};