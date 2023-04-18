const { merge } = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packagesJson = require('../package.json')

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8191,
        historyApiFallback: {
            index: "index.html"
        }     
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp': './src/bootstrap'
            },
            shared: packagesJson.dependencies,
        })
    ]
};

module.exports = merge(commonConfig, devConfig);