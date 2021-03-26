/*
* webpack.config.js webpack的配置文件
*   作用：指示 webpack 干哪些活（当你运行 webpack 指令时，会加载里面的配置）
*
* 所有构建工具都是基于nodejs平台运行的，模块化默认采用commonjs
* */

const { resolve } = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [

    ],
    mode: 'development'
}