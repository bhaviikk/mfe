const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const FORM_DOMAIN = process.env.FORM_DOMAIN || "http://localhost:8081";
const DETAILS_DOMAIN = process.env.DETAILS_DOMAIN || "http://localhost:8082";

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/container/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        form: `form@${FORM_DOMAIN}/remoteEntry.js`,
        details: `details@${DETAILS_DOMAIN}/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
