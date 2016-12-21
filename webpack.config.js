var path = require('path');
var webpack = require("webpack");

module.exports = {
    entry: [
            'webpack/hot/dev-server', //for webpack-dev-server live reload
            __dirname + "/app/js/app.jsx" ],

    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
        publicPath: "/dist/"
    },
    module: {
         loaders: [
            {
                test: /\.jsx$/,

                include: [
                    path.resolve(__dirname, "./app/js")
                ],
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                loader: 'babel-loader' //preset is better to be set in .babelrc, it will be easier to manage if there are more than one env
            }
        ]
    },
     stats: {
        colors: true
    }
}

//webpack-dev-server, in package.json ln:9
// webpack-dev-server 會在 localhost:8080 建立起專案的 server
// --devtool eval 會顯示出發生錯誤的行數與檔案名稱
// --progress 會顯示出打包的過程
// --colors 會幫 webpack 顯示的訊息加入顏色
// --content-based build 指向專案最終輸出的資料夾

/* for hot reload
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        contentBase: './'
    }

*/