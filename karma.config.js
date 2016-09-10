var webpackConfig = require('./webpack.config');
delete  webpackConfig.entry;

module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        frameworks: ['jasmine'],
        reporters: ['spec'],
        files: ['./test/unit/index.js'],
        preprocessors: {
            './test/unit/index.js': ['webpack']
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true
        },
        singleRun: true
    })
}
