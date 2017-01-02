var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: "./test/entry.js",
    output: {
        path: path.resolve(__dirname, "test"),
        filename: "bundleTest.js",

    },
    resolve: {
      extensions: ['', '.js', '.jsx', '.json']
    },
    // target: 'node', // in order to ignore built-in modules like path, fs, etc. 
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder 
    module: {
                loaders: [
                  {
                test: /\.js$/,
                exclude: [
                path.resolve(__dirname, "node_modules")
                ],
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            }
        ]
    }
};
