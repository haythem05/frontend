module.exports = function(config) {
    config.set({
      // other Karma configuration settings
      browsers: ['ChromeHeadlessNoSandbox'],
      customLaunchers: {
        ChromeHeadlessNoSandbox: {
          base: 'ChromeHeadless',
          flags: ['--no-sandbox']
        }
      },
      // other configurations as needed
    });
  };
  