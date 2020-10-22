module.exports = {
  webpackDevMiddleware: (config) => {
    config.watchOptions.poll = 300;
    return config;
  },
  env: {
    STRIPE_KEY: 'pk_test_FYr1Y2YmiHlw1YTClAcja6mn00AocMF66h',
  },
};
