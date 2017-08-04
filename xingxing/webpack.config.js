/**
 * Created by chenxq on 2017/3/22.
 */
// nodejs 中的path模块
var path = require('path');
var webpack = require('webpack');
//var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');//生成新的html
module.exports = {
    // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
    entry: {
        index:"./main.js"},
    //entry:['"./main.js"',"./main.js"]多文件打包入口，同样对象也可以多文件
    output: {
        path: './dist/js/',  //路径
        publicPath: '',  //网站运行时访问的路径
        filename: '[name]-[hash].js' // 生成文件名  name为entry下的属性名

    },
    devServer:{
        //contentBase: '',
        historyApiFallback:true,
        //hot:true,//webpack2 不支持了
        inline:true
        //progress:true,
        //port:8080,//端口你可以自定义
        //quiet:true,//显示打包的hash值
        //stats: "errors-only"
    },
    module: {
        loaders: [
            // 使用vue-loader 加载 .vue 结尾的文件
            {
                test: /\.vue$/,
                loader: 'vue'//装载机loader
            },
            {
                test: /\.js$/,
                loader: 'babel?presets=es2015',
                exclude: /node_modules///排除
            },
            {
                test: /\.(jpg|png|gif|jpeg)?$/,
                loader: 'url?limit=20480&name=dist/images/[name].[hash:8].[ext]'
            }
        ]
    },
    resolve: {//决定
        extensions: ['', '.js', '.vue'],//扩展
        alias: {//别名
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    plugins:[//热响应插件
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'My App',
            path:"",
            template:"./index.html",
            filename: './home.html'
        })
    ]
};