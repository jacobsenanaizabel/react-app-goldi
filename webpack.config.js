const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/components/index.jsx',
    output: {
        path: __dirname + '/src',
        filename: './app.js'
    },
    devServer: {
        port: 8081,
        contentBase: './src',
        proxy: {
            "/api": {
            "target": 'https://stage-api.gldi.co',
            "changeOrigin": true,
            "secure": false
            }
          }
        
    },
    resolve: {
        extensions: ['.js','.jsx'], 
        alias: {
            modules: __dirname + '/node_modules'
        }
    },     
    module: {
        rules: [
          {
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['es2015', 'react']
              }
            }
          },{
            test: /\.(s*)css$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader'
            ]
          }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
          })
    ]
}