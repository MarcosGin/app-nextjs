const withSass = require("@zeit/next-sass");
const withLess = require("@zeit/next-less");
const withCss = require("@zeit/next-css");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const withPlugins = require("next-compose-plugins");
const lessToJS = require("less-vars-to-js");
const fs = require("fs");
const path = require("path");

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, "./styles/antd-custom.less"), "utf8")
);

const nextConfig = {
  webpack: (config, { isServer, webpack }) => {
    config.plugins = config.plugins || [];
    config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));
    config.resolve.alias["@Components"] = path.join(__dirname, "components");
    config.resolve.alias["@Templates"] = path.join(__dirname, "templates");
    config.resolve.alias["@Utils"] = path.join(__dirname, "utils");

    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/;
      const origExternals = [...config.externals];
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback();
          if (typeof origExternals[0] === "function") {
            origExternals[0](context, request, callback);
          } else {
            callback();
          }
        },
        ...(typeof origExternals[0] === "function" ? [] : origExternals)
      ];

      config.module.rules.unshift({
        test: antStyles,
        use: "null-loader"
      });
    } else {
      // config.plugins.push(
      //   new BundleAnalyzerPlugin({
      //     generateStatsFile: true
      //   })
      // );
    }

    return config;
  }
};

module.exports = withPlugins(
  [
    [
      withLess,
      {
        lessLoaderOptions: {
          javascriptEnabled: true,
          modifyVars: themeVariables // make your antd custom effective
        }
      }
    ],
    [withSass],
    [
      withCss,
      {
        cssLoaderOptions: {
          url: false
        }
      }
    ]
  ],
  nextConfig
);
