    var webpackConfig = require('./webpack.config')
    webpackConfig.plugins.shift()

    module.exports = function (config) {
      config.set({

        basePath: '',

        frameworks: ['mocha', 'chai', 'sinon-chai'],

        files: [
          './src/**/*.test.js'
        ],

        exclude: [
        ],

        preprocessors: {
          'src/index.test.js': ['webpack', 'sourcemap'],
          './src/*.js': ['webpack']
        },

        plugins: [
          'karma-chai',
          'karma-coverage',
          'karma-chrome-launcher',
          'karma-istanbul-reporter',
          'karma-mocha',
          'karma-mocha-reporter',
          'karma-sinon-chai',
          'karma-sourcemap-loader',
          'karma-webpack'
        ],

        reporters: ['progress', 'mocha', 'coverage'],

        port: 9876,

        colors: true,

        logLevel: config.LOG_ERROR,

        autoWatch: true,

        browsers: ['Chrome'],

        singleRun: false,

        concurrency: Infinity,

        coverageReporter: {
          type: 'html',
          dir: 'coverage/'
        },

        mochaReporter: {
          output: 'autowatch'
        },

        webpackMiddleware: {
          noInfo: true,
          quiet: true
        },

        webpack: {
          module: {
            rules: [
              {
                test: [ /\.jsx?$/ ],
                include: [/src/],
                exclude: [/node_modules/],
                loader: 'babel-loader'
              }
            ]
          }
        }
      })
    }
