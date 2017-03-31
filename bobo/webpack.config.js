var path = require('path');
module.exports = {
    entry: {
        'app': './src/main.ts'
    },

    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].bundle.js'
    },

    resolve: {
        extensions: ['.js', '.ts']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            configFileName: './src/tsconfig.json'
                        }
                    },
                    'angular2-template-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test:/\.pug$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: false
                    }
                },{
                    loader: 'pug-html-loader',
                    options: {
                        pretty: false,
                        exports: false,
                        doctype: 'html'
                    }
                }]
            },
            {
                test: /\.less$/,
                use: ['css-to-string-loader','css-loader',{
                    loader: 'less-loader',
                    options: {
                        relativeUrls: true
                    }
                }]
            }
        ]
    },

    plugins: []
};