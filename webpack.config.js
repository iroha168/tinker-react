const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
const src = path.resolve(__dirname, 'src')
dist = path.resolve(__dirname, 'dist')
module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: "production",

    entry: src + '/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                // 拡張子 .js の場合
                test: /\.js$/,
                use: [
                    {
                        // Babel を利用する
                        loader: "babel-loader",
                        // Babel のオプションを指定する
                        options: {
                            presets: [
                                // プリセットを指定することで、ES2019 を ES5 に変換
                                "@babel/preset-env",
                                // React の JSX を解釈
                                "@babel/react"
                            ]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        //以下追記
        new HtmlWebpackPlugin({
            template: dist + '/index.html',
            filename: 'index.html'
        })
    ]
};
