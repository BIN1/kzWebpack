const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin=require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');//将大包文件压缩
const ExtractTextPlugin = require('extract-text-webpack-plugin');//将样式分离出来
// 创建多个实例
const extractCSS = new ExtractTextPlugin('css/[name]-css.css');
const extractLESS = new ExtractTextPlugin("css/[name]-less.css");
module.exports = {
  entry: {
    index: "./src/js/index.js",
    detail: "./src/js/goods/detail.js"
  },
  output: {
    filename: "js/[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "inline-source-map",
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    // new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      title: "index"
    }),
    extractLESS,
    extractCSS
  ],
  module: {
    rules: [
      //   {
      //     test: /\.less$/i,
      //     use: extractLESS.extract(["css-loader", "less-loader"])
      //   },
      // 加载样式
      {
        test: /\.(css|less|scss)$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      // 加载图片
      {
        test: /\.(png|svg|jpg|png)$/,
        use: ["file-loader"]
      },
      // 加载字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      },
      // 加载数据
      {
        test: /\.xml$/,
        use: ["xml-loader"]
      },
      {
        test: /\.(csv|tsv)$/,
        use: ["csv-loader"]
      },
    //   在线将es6转换es5
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  }
};