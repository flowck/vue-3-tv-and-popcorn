module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "${__dirname}/src/assets/scss/global.scss";`,
      },
    },
  },
};
