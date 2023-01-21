const path = require('path')

module.exports = {
  env: {
    basePath:
      process.env.NODE_ENV !== 'development' ? '/fullstack-ts-example-app' : '/'
  },
  assetPrefix:
    process.env.NODE_ENV !== 'development' ? '/fullstack-ts-example-app/' : '/',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
}
