var webpackConfig = require('./webpack.config');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
      'test/*.ts'
    ],
    exclude: [
    ],
    preprocessors: {
      '**/*.ts': ['typescript']
    },
    typescriptPreprocessor: {
        options: {
            sourceMap: true,
            noResolve: false
        },
        transformPath: function(path) {
            return path.replace(/\.ts$/,'.js');
        }
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
}