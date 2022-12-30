module.exports = {
  env: {
    basePath:
      process.env.NODE_ENV !== 'development' ? '/fullstack-ts-example-app' : '/'
  },
  assetPrefix:
    process.env.NODE_ENV !== 'development' ? '/fullstack-ts-example-app/' : '/'
}
