module.exports = {
    devServer: {
        port: 9999,
        proxy: {
            '/api': {
                target: 'http://localhost:8181',//这里后台的地址模拟的;应该填写你们真实的后台接口
                ws: true,
                changOrigin: true,//允许跨域
                pathRewrite: {
                    '^/api': ''//请求的时候使用这个api就可以
                }
            }
        }
    },
    chainWebpack: (config)=>{
        config
            .resolve.extensions.add('.ts').add('.tsx')
            .end().end()
            .module
            .rule('typescript')
            .test(/\.tsx?$/)
            .use('babel-loader')
            .loader('babel-loader')
            .end()
            .use('ts-loader')
            .loader('ts-loader')
            .options({
                transpileOnly: true,
                appendTsSuffixTo: [
                    '\\.vue$',
                ],
                happyPackMode: false,
            })
            .end();
    }
}