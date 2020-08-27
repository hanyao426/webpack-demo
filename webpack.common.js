 const path = require('path');
 const {CleanWebpackPlugin} = require('clean-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const VueLoaderPlugin = require('vue-loader/lib/plugin')

 module.exports = {
   entry: {
     main: './src/main.js'
   },
   plugins: [
     new CleanWebpackPlugin(),
     new HtmlWebpackPlugin({
       title: '我的项目'
     }),
     new VueLoaderPlugin()
   ],
   output: {
     filename: '[name].[chunkhash].js',
     path: path.resolve(__dirname, 'dist')
   },
   module:{
     rules:[{
      test:/\.vue$/,
      loader:[
        'vue-loader'
      ]
    },{
       test:/\.css$/,
       use:[
         'style-loader',
         'css-loader'
       ],
       exclude: /node_modules/
     },{
       test:/\.(jpg|png|gif)$/,
       use:[
         'file-loader'
       ]
     }
    ]
   },
   resolve:{
    alias:{
      '@':path.resolve(__dirname,'./src'),
      '@server':path.resolve(__dirname,'./src/server'),
      '@compronent':path.resolve(__dirname,'./src/compronent'),
    }
   }
 };