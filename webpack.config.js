const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const isDevelopment = process.env.NODE_ENV  !== 'production'

module.exports= {
    mode: isDevelopment ? "development": "production",
    devtool: isDevelopment? 'eval-source-map': "source-map",
    entry: "./src/index.js", 
    output: {
        path: path.resolve(__dirname, "dist"), 
        filename: 'bundle.js'
    }, 
    resolve: { 
        extensions: ['.js', '.jsx'], 
    }, 
    devServer: {
        static: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                exclude: /node_modules/, 
                loader: 'babel-loader', 
                options: { presets: ["@babel/env", ["@babel/preset-react", {runtime: "automatic"}]]
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html")
        })
    ],
   
}