const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    // 基本路径
    lintOnSave:false,
    publicPath: "./",
    outputDir: "dist",
    configureWebpack: {
        resolve: {
            // 文件路径别名
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'views': '@/pages'
            }
        }
    },
    css: {
        loaderOptions: {
            sass: {
                // @是src的别名
                // 全局引入 css
                data: `@import "@/assets/css/color.scss";`
            },
            less: {
                modifyVars: {
                    'red-color':'#FF4C4E',
                    blue: '#2151ED',
                    orange: '#f08d49',
                    'text-color': '#333'
                }
            }
        }
    },
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    productionSourceMap: false,
    devServer: {
        port: 8085 ,
        proxy: {// 配置多个代理(配置一个 proxy: 'http://localhost:4000' )
            '/api': {
                target: 'http://test.saasapi.lishe.cn/lshe.framework.protocol.http',
                ws: true,
                changeOrigin: true
            },
        }
    }

}
