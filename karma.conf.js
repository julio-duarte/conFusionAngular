// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
      basePath: '',
      frameworks: ['jasmine', '@angular/cli'],
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('karma-jasmine-html-reporter'),
        require('karma-coverage-istanbul-reporter'),
        require('@angular/cli/plugins/karma')    
      ],
      client:{
        clearContext: false // leave Jasmine Spec Runner output visible in browser
      },
      files: [
        { pattern: './src/app/menu/*.spec.ts', watched: true},
        { pattern: './src/test.ts', watched: false },
        { pattern: '**/*.html', included: false, watched: true },
        { pattern: '**/*.css', included: false, watched: true }
      ],
      preprocessors: {
        './src/test.ts': ['@angular/cli']
      },    
      mime: { 'text/x-typescript': ['ts','tsx'] },
      coverageIstanbulReporter: {
        reports: ['html', 'lcovonly','lvcov','text-summary'],
        fixWebpackSourcePaths: true,
        thresholds: {
          emitWarning: true
      }
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
