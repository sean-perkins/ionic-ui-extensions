module.exports = function (context) {
  return {
    name: "docusaurus-tailwindcss",
    configurePostCss(postCssOptions) {
      postCssOptions.plugins.push(require("tailwindcss"));
      postCssOptions.plugins.push(require("autoprefixer"));
      return postCssOptions;
    },
  };
};
