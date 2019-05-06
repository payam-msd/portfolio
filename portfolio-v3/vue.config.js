// const path = require("path");
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        test: /\.s[a|c]ss$/,
        loader: "style!css!sass",
        data: `
            @import "@/styles/scss/_config.scss";
            @import "@/styles/scss/_mediaQuery.scss";
        `
      }
    }
  },
  configureWebpack: {
    devServer: {
      host: "localhost",
      port: 3000
    }
  }
  //     pluginOptions: {
  //       "style-resources-loader": {
  //         preProcessor: "scss",
  //         patterns: [path.resolve(__dirname, "./src/sass/scss/main.scss")]
  //       }
  //     }
  //   },
};
