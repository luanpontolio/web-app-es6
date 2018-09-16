var webpack = require('webpack');
const path = require('path');


// Toda a configuração do webpack é aqui dentro
module.exports = {
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './build.js'
    },
    // Rules responsaveis pela precompilação
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        ['es2015', { module: false }]
                    ]
                }
            }
        ]
    }, 
   
}