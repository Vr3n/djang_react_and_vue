const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const path = require('path');

module.exports = {
    entry: "./assets/index.js", // path to input file.
    output: {
        filename: 'index-bundle.js', // Output bundle file name
        path: path.resolve(__dirname, './static'),  // path to our django static directory
    },
    module: {
        rules: [{
            test: /\.vue$/,
            exclude: /node_modules/,
            use: [
                'vue-loader',
                'vue-style-loader',
                'css-loader'
            ]
        },{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: {
                presets: [
                    "@babel/preset-env",
                    "@babel/preset-react"
                ]
            }
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
    ]
}