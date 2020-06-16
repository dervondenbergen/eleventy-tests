class Test {
  data() {
    return {
      permalink: "/_redirects"
    };
  }

  render(data) {
    return Object.values(data.redirects).map(r => {
      return `${r.from} ${r.to} 302`
    }).join('\n');
  }
}

module.exports = Test;
