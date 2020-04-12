/* eslint-disable */
const withFonts = require('next-fonts');
module.exports = withFonts({
    distDir: 'build',
    webpack(config, options) {
        config.module.rules.push({
            test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
            use: ['file-loader']
        })
        return config;
    }
});