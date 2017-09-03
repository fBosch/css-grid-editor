module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'CSS_GRID_EDITOR',
      externals: {
        react: 'React'
      }
    }
  }
}
