const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = require('./paths');
var styleLoader = require('./styleLoader');

module.exports = function (env) {
    return {
        entry: {
            'polyfills': './polyfills.ts',
            'vendor': './vendor.ts',
            'app': './src/main.ts',
        },

        resolve: {
            extensions: ['.js', '.ts']
        },

        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loaders: [
                        {
                            loader: 'awesome-typescript-loader',
                            options: { configFileName: './tsconfig.json' }
                        }, 'angular2-template-loader'
                    ]
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: "html-loader",
                            options: {
                                minimize: true,
                                caseSensitive: true,
                                removeAttributeQuotes: false
                            }
                        }
                    ]
                },
                {
                    test: /[\/\\]@angular[\/\\]core[\/\\].+\.js$/,
                    parser: { system: true }
                },
                {
                    test: styleLoader.cssRegex,
                    include: /node_modules/,
                    use: styleLoader.getStyleLoadersIncludingNodeModules(env, true, { importLoaders: 1 })
                },
                {
                    test: styleLoader.cssRegex,
                    exclude: /node_modules/,
                    use: styleLoader.getStyleLoadersIncludingNodeModules(env, false, { importLoaders: 1 })
                },
                {
                    test: styleLoader.sassRegex,
                    include: /node_modules/,
                    use: styleLoader.getStyleLoadersIncludingNodeModules(env, true, { importLoaders: 2 }, 'sass-loader')
                },
                {
                    test: styleLoader.sassRegex,
                    exclude: /node_modules/,
                    use: styleLoader.getStyleLoadersIncludingNodeModules(env, false, { importLoaders: 2 }, 'sass-loader')
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2|bmp|gif|jpe?g|png)$/,
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        name: `${paths.outputMediaPath}[name].[ext]`
                    }
                },
                {
                    test: /\.(ico)$/,
                    use: "file-loader?name=[name].[ext]"
                }
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html",   // Input FileName
                filename: "./index.html"    // Output FileName
            }),
            new webpack.ContextReplacementPlugin(
                /\@angular(\\|\/)core(\\|\/)fesm5/
            ),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                "window.jQuery": 'jquery'
            })
        ],

        optimization: {
            splitChunks: {
                chunks: "all"
            }
        }
    };
}