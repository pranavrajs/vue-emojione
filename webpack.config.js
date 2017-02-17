const path = require('path');

module.exports = {
    entry: './vue-emoji.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'vue-emoji.js',
        library: 'vue-emoji',
        libraryTarget: 'umd'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['es2015']
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.svg/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {}
                    }
                ]
            }
        ]
    }
};
