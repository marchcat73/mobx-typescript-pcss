module.exports = ({ file}) => ({
  parser: file.extname === '.css' ? 'postcss-safe-parser' : false,
})
// module.exports = {
//   plugins: [
//     require('postcss-loader'),
//     require('postcss-import'),
//     require('postcss-preset-env')({
//       stage: 0,
//     }),
//     require('postcss-nested'),
//     require('autoprefixer'),
//     require('postcss-extend'),
//     require('postcss-all-link-colors'),
//     require('postcss-css-variables'),
//     require('postcss-minimize'),
//   ]
// }