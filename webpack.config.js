var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
    context: __dirname,
    devtool: debug
        ? "inline-sourcemap"
        : null,
    entry: "./assets/jsx/react.jsx",
    output: {
        path: __dirname + "/assets/js",
        filename: "react.min.js"
    },
    module: {
        loaders: [
            {
                test : /\.jsx?$/, // Match both .js and .jsx files
                exclude : /node_modules/,
                loader : "babel-loader",
                query : {
                    presets: ['es2015', 'react', 'stage-2']
                }
            }
        ]
    },
    plugins: debug
        ? []
        : [
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false})
        ]
};
