const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode : "development",
    entry : {
        app : path.resolve(__dirname,'./src/index.js')
    },
    output : {
        filename : 'webpack-build.js',
        path : path.resolve(__dirname,'dist')
    },
    devServer : {
        hot : true,
        host : '0.0.0.0',
        port : '8000',
        overlay : true,

    },
    module : {
        rules : [
            {
                test : /\.(js|jsx)$/,
                exclude:path.resolve(__dirname,'./node_modules'),
                use : ['babel-loader']
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            filename : 'index.html',
            template : path.resolve(__dirname,'./public/index.html')
        })
    ],
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom',
            },
        
    }


    
}