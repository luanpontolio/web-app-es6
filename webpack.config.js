var webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

// Cria-se uma variavel da qual seu valor será definido de acordo com 
// o que esta presente em process.env.NODE_EN, neste caso ela estará vazia
// e será adicionado o valor 'production'.
const nodeENV = process.env.NODE_ENV || 'production';


// Toda a configuração do webpack é aqui dentro
module.exports = {
    devtool: 'source-map',
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
    plugins: [
        new UglifyJSPlugin({
          uglifyOptions: {
            beautify: false,
            ecma: 6,
            compress: true,
            comments: false,
            mangle: false,
          },
          sourceMap: true
        }),
        // adiciona um novo plugin para definit o valor de 
        // process.env, onde é criado uma variavel NODE_ENV para ser usada
        // definindo qual o ambiente
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify(nodeENV) }
        })
    ]
   
}