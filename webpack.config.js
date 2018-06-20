const webpack = require('webpack')

module.exports = {
    entry: './src/components/index.jsx',
    output: {
        path: __dirname + '/src',
        filename: './bundle.js'
    },
    devServer: {
        port: 8081,
        contentBase: './src'
    },
    resolve: {
        extensions: ['.js','.jsx']
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
          }
        ]
    }
}