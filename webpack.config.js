const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/main.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    }
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: path.resolve(__dirname, './index.html'), // 我们要使用的 html 模板地址
    //         filename: 'index.html', // 打包后输出的文件名
    //         title: '手搭 Vue 开发环境' // index.html 模板内，通过 <%= htmlWebpackPlugin.options.title %> 拿到的变量
    //     })
    // ]
}