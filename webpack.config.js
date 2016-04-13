/**
 * Created by kristina on 02.04.16.
 */

var webpack = require('webpack');
var path = require('path');
module.exports = {
    context: path.join(__dirname, "src"),
    entry: "./js/app.js",
    module: {
        loaders: [
            {
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
                }
            }
        ]
    },
    output: {
        path: __dirname + "/src/",
        filename: "app.min.js"
    }
};
