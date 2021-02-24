const path = require('path');

module.exports = {
    entry: "./assets/index.js", // path to input file.
    output: {
        filename: 'index-bundle.js', // Output bundle file name
        path: path.resolve(__dirname, './static'),  // path to our django static directory
    },
    module: {
        rules: [{
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
}