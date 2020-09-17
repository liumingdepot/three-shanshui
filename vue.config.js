const target = 'http://113.140.66.230:9777/' //线上
// const target = 'http://192.168.2.118:8080/'

const vueConfig = {
    devServer: {
        // development server port 8000
        port: 8000,
        proxy: {
            '/api': {
                target,
                pathRewrite: { '^/api': '' },
                ws: false,
                changeOrigin: true
            }
        }
    }
}

module.exports = vueConfig