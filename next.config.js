const withImages = require("next-images");
const withTM = require("next-transpile-modules")(["antd-mobile"]);

// css跟less 并存使用
const withCSS = require("@zeit/next-css");
const withLess = require("@zeit/next-less");
// module.exports = withLess(withCSS({}))
const withSass = require("@zeit/next-sass");

// if (typeof require !== "undefined") {
//   require.extensions[(".css", ".less")] = (file) => {};
// }

if (typeof require !== "undefined") {
  require.extensions[(".css", ".sass")] = (file) => {};
}

module.exports = withTM(
  withImages({
    // 你项目中其他的 Next.js 配置
    reactStrictMode: true,
    images: {
      disableStaticImages: true,
    },
  })
);

// module.exports = withLess(
//   withCSS(
//     withTM(
//       withImages({
//         // 你项目中其他的 Next.js 配置
//         reactStrictMode: true,
//         images: {
//           disableStaticImages: true,
//         },
//       })
//     )
//   )
// );
