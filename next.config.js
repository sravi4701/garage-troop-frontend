// next.config.js
const withCSS = require('@zeit/next-css');


// module.exports = {
// 	webpack: (config) => {
// 		const webpack = require('webpack')
// 		const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// 		config.plugins = config.plugins || []
// 		config.plugins.push(new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en/))
// 		config.plugins.push(new BundleAnalyzerPlugin())
// 		return config
// 	}
// }

module.exports = withCSS({
    /* config options here */
    webpack(config) {
        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    name: '[name].[ext]'
                }
            }
        });
        return config;
    }
});
