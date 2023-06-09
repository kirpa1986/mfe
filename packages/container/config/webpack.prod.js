const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packagesJson = require('../package.json')

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: "production",
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name:'container',
            remotes: {
                marketing: `marketing@marketing/latest/remoteEntry.js`
            },
            shared: packagesJson.dependencies,
        }),
    ]
}

module.exports = merge(commonConfig, prodConfig);