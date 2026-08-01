// CRACO config: lets us import .yaml/.yml data files directly as JS objects
// without ejecting Create React App. Data lives in src/data/*.yaml so it is
// easy to edit by hand.
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // yaml-loader (v0.9) emits an ES module (`export default ...`), so it is
      // treated as a normal JS module rather than type: "json".
      const yamlRule = {
        test: /\.ya?ml$/,
        use: "yaml-loader",
      };

      // CRA nests its loaders inside a `oneOf` array. Insert our rule at the
      // front so YAML is parsed before CRA's catch-all asset/resource loader.
      const oneOfRule = webpackConfig.module.rules.find((rule) =>
        Array.isArray(rule.oneOf)
      );

      if (oneOfRule) {
        oneOfRule.oneOf.unshift(yamlRule);
      } else {
        webpackConfig.module.rules.push(yamlRule);
      }

      return webpackConfig;
    },
  },
};
