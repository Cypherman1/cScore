// Pages Options : for Main Application
const mainPages = {
  index: {
    entry: ["src/main.js"],
    template: "public/index.html",
    filename: "index.html",
    title: "Main",
  },
};

// Pages Options : for IDE Application
const idePages = {
  index: {
    entry: ["uidev_tools/ide/ide.js"],
    template: "public/index.html",
    filename: "index.html",
    title: "Ide",
  },
  theme: {
    entry: ["src/styles/theme/theme.js"],
    template: "public/theme.html",
    filename: "theme.html",
    title: "Theme",
  },
  preview: {
    entry: ["uidev_tools/ide/preview.js"],
    template: "public/index.html",
    filename: "preview.html",
    title: "Preview",
  },
};

const appPages = process.env.IDE_PAGE ? idePages : mainPages;
const runtimeCompiler = process.env.IDE_PAGE ? true : false;

// Vue CLI Configs
module.exports = {
  // Setup Alias
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule
      .use("vue-loader")
      .loader("vue-loader") // or `vue-loader-v16` if you are using a preview support of Vue 3 in Vue CLI
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader");
  },

  configureWebpack: {
    resolve: {
      alias: {
        "@uidev": "uidev-component",
      },
    },
  },

  // For IDE, Bundled resource can be access via file protocol
  publicPath: process.env.PUBLIC_PATH || "/",

  // Use gzip in devServer
  devServer: {
    host: "localhost",
    compress: true,
    // Mock APIs for Local Development
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8080",
        bypass: (req, res) => {
          let getMockData = require("./uidev_tools/mocks/mock-api")[req.url];

          if (getMockData) res.send(getMockData());
          else return false;
        },
      },
    },
  },
  pages: appPages,

  // Don't need to create source-map
  productionSourceMap: false,

  chainWebpack: (config) => {
    // Web Fonts file have to be cached (Fixed resource name)
    config.module
      .rule("fonts")
      .use("url-loader")
      .loader("url-loader")
      .tap((options) => {
        options.fallback.options.name = "fonts/[name].[ext]";
        return options;
      });

    // Image file have to be cached (Fixed resource name)
    config.module
      .rule("images")
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .use("url-loader")
      .loader("file-loader")
      .tap((options) => {
        options.name = "img/[name].[ext]";
        return options;
      });

    if (process.env.IDE_PAGE) {
      const webpack = require("webpack");
      config.plugins.delete("hash-module-ids");
      config.plugin("named-modules").use(webpack.NamedModulesPlugin);
      config.optimization.usedExports(false);
    }
  },

  //For SASS Variable Import
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/styles/variables.scss";`,
        implementation: require("sass"),
      },
    },
  },

  runtimeCompiler,
  transpileDependencies: ["uidev-component", "vuex", "ansi-regex"],
};
