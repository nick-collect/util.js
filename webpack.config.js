var path  = require('path')
const resolve = dir => path.resolve(__dirname, dir);
var root = path.resolve(__dirname)

module.exports = {
    devtool: 'source-map',
    mode: 'development',
    entry: {
        'main': path.join(root, 'src/index.js')
    },
    output: {
        path: path.join(root, 'dist'),
        filename: '[name].js',
        publicPath: ''
    },
    resolve: {
        alias: {
            '@': resolve('src/')
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            enforce: 'pre',
            use: [{
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    presets: ['@babel/preset-env']
                }
            }, {
                loader: 'eslint-loader',
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            }]
        }]
    },
    plugins: [
    ]
}
