module.exports = {
  eleventyComputed: {
    linearGradient: data => data.background.map(c => `${c.color} ${c.position}%`).join(',')
  }
};