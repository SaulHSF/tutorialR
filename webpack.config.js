const path = require('path');

function srcPath(subdir) {
  return path.join(__dirname, "src", subdir);
}

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      components: srcPath('components/')
    },
    extensions: ['ts', 'js', 'tsx', 'jsx', 'css'],
  }
};