module.exports = function(config) {
    config.set({
      // other Karma configuration settings
      browsers: ['ChromeHeadless'],
      plugins: [
        // other plugins
        'karma-chrome-launcher'
      ]
      // other configurations as needed
    });
  };
  