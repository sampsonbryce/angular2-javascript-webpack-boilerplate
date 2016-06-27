module.exports = {
    entry: __dirname + "/app/main.js",
    devtool: 'source-map',
    output: {
        path: __dirname + "/dist",
        filename: "Bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ['es2015', 'angular2']
            }
        }]
    }
};
