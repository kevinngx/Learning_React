// Entry point --> app.js
// Output bundle --> location?

const path = require('path');

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /nodes_modules/
            }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
            }, 
        ],
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
    
};

// loader