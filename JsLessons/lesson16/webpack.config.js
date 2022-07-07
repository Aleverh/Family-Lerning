const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/mainIndex.js',
    },
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'build'),
    },
    devServer: {
        static: './build'
    }
};