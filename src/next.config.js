require('dotenv').config({ path: '.env' })

module.exports = {
  basePath:
    process.env.NODE_ENV === 'production' ? process.env.FRONTEND_BASE_PATH : '/'
}
