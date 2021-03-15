
module.exports = {
   publicPath:'./',
    css: {
      loaderOptions: {
            sass: {
            additionalData:`@import "@/assets/_shared.scss";`,
        },
      },
    },
  } 