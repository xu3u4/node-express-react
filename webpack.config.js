var path = require('path');
var webpack = require("webpack");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname+'/index.html',
    filename: 'index.html',
    inject: 'body',
});

console.log(__dirname+'/dist/index.html');

module.exports = {
    entry: [
        'webpack/hot/dev-server', //for webpack-dev-server live reload
        __dirname + "/app/js/app.jsx"
    ],

    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
        publicPath: "/" //where index.html
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
    },
    devServer: {
        inline: true,
        hot: true,
        contentBase: './'
    },
    plugins: [HTMLWebpackPluginConfig,
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
console.log(`NODE_ENV ${process.env.NODE_ENV}`);

//package.json
// --devtool eval 會顯示出發生錯誤的行數與檔案名稱
// --progress 會顯示出打包的過程
// --colors 會幫 webpack 顯示的訊息加入顏色
// --content-based build 指向專案最終輸出的資料夾
/*
export NODE_ENV=development --for linux&osx
set NODE_ENV=development --for windows
*/
/* for hot reload
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        contentBase: './'
    }
*/
