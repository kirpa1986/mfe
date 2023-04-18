const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common');
const packagesJson = require('../package.json');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8190,
        historyApiFallback: {
            index: "index.html"
        }     
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html'

        }),
        new ModuleFederationPlugin( {
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:8191/remoteEntry.js'
            },
            shared: packagesJson.dependencies,
        } )
    ]
};

module.exports = merge(commonConfig, devConfig);