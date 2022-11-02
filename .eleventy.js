module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/main.css');
  eleventyConfig.addPassthroughCopy('./src/main.css.map');
  eleventyConfig.addPassthroughCopy('./src/lib/main.js');
  eleventyConfig.addPassthroughCopy('./src/assets');

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  }
};