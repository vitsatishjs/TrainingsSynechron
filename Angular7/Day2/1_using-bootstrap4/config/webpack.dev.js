const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = function (env) {
    return webpackMerge(commonConfig(env), {
        mode: 'development',

        // devtool: 'cheap-module-eval-source-map',
        module: {
            rules: [
                {
                    test: /\.(css)$/,
                    use: ["style-loader", "css-loader"]
                },
                {
                    test: /\.(scss)$/,
                    use: [
                        {
                            loader: "style-loader"
                        },
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: function () {
                                    return [
                                        require('autoprefixer')
                                    ]
                                }
                            }
                        },
                        {
                            loader: "sass-loader"
                        }
                    ]
                }
            ]
        },

        output: {
            publicPath: 'http://localhost:3000/',
            filename: '[name].js',
            chunkFilename: '[id].chunk.js'
        },

        devServer: {
            inline: true,
            port: 3000,
            historyApiFallback: true,
            clientLogLevel: 'none',
            stats: 'minimal',
            open: 'Chrome'
        }
    });
}