const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//-----------------

const backendServer = 'http://localhost:3000';

module.exports = {
    entry: './src/Index.tsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.min.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        proxy: {
            '/api': {
                target: backendServer,
                secure: false
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|gif|jpg|svg)$/,
                include: [
                    path.join(__dirname, '/src/assets')
                ],
                loader: 'file-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}