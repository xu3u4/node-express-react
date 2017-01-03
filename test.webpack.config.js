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
    externals: [nodeExternals({
        // this WILL include `requirejs` in the bundle
        whitelist: ['requirejs', 'react', 'object-assign', 'fbjs/lib/invariant', 'fbjs/lib/warning', 'fbjs/lib/emptyFunction',
            'fbjs/lib/emptyObject', 'chai', 'react-addons-test-utils', 'assertion-error', 'type-detect', 'deep-eql', 'react-dom/lib/ReactTestUtils',
            'expect.js', 'jsdom', 'expect', 'expect-jsx'
        ]
    })], // in order to ignore all modules in node_modules folder
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(json)$/,
                loader: 'json-loader'
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
    },
    externals: {
        fs: '{}',
        tls: '{}',
        net: '{}',
        console: '{}',
        child_process:'{}'
    }
};
