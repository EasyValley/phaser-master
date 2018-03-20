const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const config = {
    entry: path.join(__dirname, './src/app.js'),
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'app.bundle.js'
    },
    mode: "development",
    devtool: "eval-source-map",
    module: {
        rules: [
            { test: /\.css$/, use: 'css-loader' },
            { test: /\.ts$/, use: 'ts-loader' },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: './img'
                        }
                    }
                ]
            },
            {
                test: /\.(mp3|m4a)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: './media'
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'es2017'],
                        plugins: [[
                            "transform-runtime",
                            {
                                "helpers": false,
                                "polyfill": false,
                                "regenerator": true,
                                "moduleName": "babel-runtime"
                            }
                        ]]
                    }
                }
            }
        ]
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'phaser应用',
            template: path.join(__dirname, './src/index.html')
        })],
    externals: {
        Phaser: 'Phaser'
    }
};

module.exports = config;