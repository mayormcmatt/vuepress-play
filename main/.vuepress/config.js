module.exports = {
    title: 'Playing with Vuepress',
    description: 'Just futzing around',
    base: '/vuepress-play/',
    scss: {
        rules: [{
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        }]
    }
}