// vue.config.js 配置说明
// 这里只列一部分，具体配置惨考文档啊
// const webpack = require('webpack')
const path = require('path');

module.exports = {
    // publicPath: './',
    // lintOnSave: true,

    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "less",
            patterns: [
                 // 这个是加上自己的路径,不能使用(如下:alias)中配置的别名路径
                path.resolve(__dirname, "./src/assets/css/global.less")
            ]
        }
    }

}