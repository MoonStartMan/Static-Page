const path = require('path');
const webpack = require('webpack');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: {
        autosize: './src/js/autosize.js',
        four:'./src/js/404.js',
        about: './src/js/about.js',
        h5common: './src/js/h5common.js',
        attract: './src/js/attract.js',
        commit: './src/js/commit.js',
        contarct: "./src/js/contarct.js",
        h5attract: "./src/js/h5attract.js",
        h5contact: "./src/js/h5contact.js",
        h5index: './src/js/h5index.js',
        index: './src/js/index.js',
        mobile: './src/js/mobile.js',
        news: './src/js/news.js',
        product: "./src/js/product.js",
        service: "./src/js/service.js"
    },
    plugins: [
        //  自动清空dist目录
        new CleanWebpackPlugin(),

        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        new CopyWebpackPlugin([
            { from: './src/audio/', to: 'audio' }
        ]),
        //  设置html模板生成路径
        new HtmlWebpackPlugin({
            filename: '404.html',
            template: './src/pages/404.html',
            chunks: ['style','autosize','four']
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: './src/pages/about.html',
            chunks: ['style','h5common','about']
        }),
        new HtmlWebpackPlugin({
            filename: 'attract.html',
            template: './src/pages/attract.html',
            chunks: ['style','autosize','attract']
        }),
        new HtmlWebpackPlugin({
            filename: 'commit.html',
            template: './src/pages/commit.html',
            chunks: ['style','autosize',"commit"]
        }),
        new HtmlWebpackPlugin({
            filename: 'contarct.html',
            template: './src/pages/contarct.html',
            chunks: ['style','autosize',"contarct"]
        }),
        new HtmlWebpackPlugin({
            filename: 'h5attract.html',
            template: './src/pages/h5attract.html',
            chunks: ['style','h5common',"h5attract"]
        }),
        new HtmlWebpackPlugin({
            filename: 'h5contact.html',
            template: './src/pages/h5contact.html',
            chunks: ['style','h5common',"h5contact"]
        }),
        new HtmlWebpackPlugin({
            filename: 'h5index.html',
            template: './src/pages/h5index.html',
            chunks: ['style','h5common',"h5index"]
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/pages/index.html',
            chunks: ['style','autosize',"index"]
        }),
        new HtmlWebpackPlugin({
            filename: 'mobile.html',
            template: './src/pages/mobile.html',
            chunks: ['style','h5common',"mobile"]
        }),
        new HtmlWebpackPlugin({
            filename: 'news.html',
            template: './src/pages/news.html',
            chunks: ['style','autosize',"news"]
        }),
        new HtmlWebpackPlugin({
            filename: 'product.html',
            template: './src/pages/product.html',
            chunks: ['style','autosize',"product"]
        }),
        new HtmlWebpackPlugin({
            filename: 'service.html',
            template: './src/pages/service.html',
            chunks: ['style','autosize',"service"]
        }),
    ],
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ]
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            //  css中的图片路径增加前缀
                            publicPath: '../'
                        }
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.(mp3)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        //  图片输出的实际路径(相对于dist)
                        outputPath: 'audio',
                        //  当小于某KB时转为base64
                        limit: 0
                    }
                }]
            },
            {
                test: /\.(png|svg|jpg|gif|web)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        //  图片输出的实际路径(相对于dist)
                        outputPath: 'images',
                        //  当小于某KB时转为base64
                        limit: 0
                    }
                }]
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: ['img:src', 'img:data-src', 'audio:src'],
                        minimize: true
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        //  保留文件名和后缀名
                        name: '[name].[ext]',
                        //  输出到dist/fonts/目录
                        outputPath: 'fonts',
                    }
                }
            }
        ]
    },
    //  编译输出配置
    output: {
        //  js生成到dist/js, [name]表示保留js文件名
        filename: 'js/[name].js',
        //  输出路径为dist
        path: path.resolve(__dirname, 'dist')
    },
};