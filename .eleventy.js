module.exports = function(eleventyConfig) {
  return {
    dir: {
      output: '_site',
      input: 'src/views',
      includes: './includes', // relative to 'input'
      layouts: './layouts', // relative to 'input'
      data: './data', // relative to 'input'
    },
  };
};