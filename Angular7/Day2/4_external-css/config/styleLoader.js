const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const cssRegex = /\.css$/;
const sassRegex = /\.(scss|sass)$/;

const getStyleLoadersIncludingNodeModules = (env, includeNodeModules, cssOptions, preProcessor) => {
    const isEnvDevelopment = env === 'dev';
    const isEnvProduction = env === 'prod';

    const loaders = [
        includeNodeModules && isEnvDevelopment && require.resolve('style-loader'),
        includeNodeModules && isEnvProduction && {
            loader: MiniCssExtractPlugin.loader
        },
        !includeNodeModules && require.resolve("raw-loader"),
        includeNodeModules && {
            loader: require.resolve('css-loader'),
            options: cssOptions,
        },
        {
            loader: require.resolve('postcss-loader'),
            options: {
                ident: 'postcss',
                plugins: () => [
                    require('autoprefixer')
                ]
            }
        },
    ].filter(Boolean);

    if (preProcessor) {
        loaders.push({
            loader: require.resolve(preProcessor)
        });
    }

    return loaders;
};

module.exports = { getStyleLoadersIncludingNodeModules, cssRegex, sassRegex };