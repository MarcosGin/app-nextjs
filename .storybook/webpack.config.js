const lessToJS = require("less-vars-to-js");
const path = require("path");
const fs = require("fs");

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, "../styles/antd-custom.less"), "utf8")
);
// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need


  config.resolve.alias["@Components"] = path.join(__dirname, "../components");
  config.resolve.alias["@Templates"] = path.join(__dirname, "../templates");
  config.resolve.alias["@Utils"] = path.join(__dirname, "../utils");
  config.module.rules.push({
    test: /\.scss$/,
    use: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../")
  });

  config.module.rules.push({
    test: /\.less$/,
    use: [
      "style-loader",
      "css-loader",
      {
        loader: "less-loader",
        options: {
          javascriptEnabled: true,
          modifyVars: themeVariables // make your antd custom effective
        }
      }
    ],
    include: path.resolve(__dirname, "../")
  });
  config.externals = {
    jsdom: "window",
    cheerio: "window",
    "react/lib/ExecutionEnvironment": true,
    "react/lib/ReactContext": "window",
    "react/addons": true
  };

  // Return the altered config
  return config;
};
