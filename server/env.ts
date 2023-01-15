import dotenv from 'dotenv'

dotenv.config()

const read = (envVar?: string) => {
  const defaultEmptyValue = '!!!THIS_VALUE_IS_NOT_SET!!!'

  return envVar ?? defaultEmptyValue
}

const NODE_ENV = process.env.NODE_ENV
const API_JWT_SECRET = read(process.env.API_JWT_SECRET)
const API_USER_ID = read(process.env.API_USER_ID)
const API_USER_PASS = read(process.env.API_USER_PASS)
const API_SERVER_PORT = +(process.env.API_SERVER_PORT ?? '8080')
const API_BASE_PATH = read(process.env.API_BASE_PATH)
const API_ORIGIN = read(process.env.API_ORIGIN)
const API_UPLOAD_DIR = read(process.env.API_UPLOAD_DIR)

const AWS_REGION = read(process.env.AWS_REGION)
const AWS_S3_ENDPOINT = read(process.env.AWS_S3_ENDPOINT)
const AWS_S3_BUCKET_USER_UPLOADS = read(process.env.AWS_S3_BUCKET_USER_UPLOADS)

export {
  API_JWT_SECRET,
  API_USER_ID,
  API_USER_PASS,
  API_SERVER_PORT,
  API_BASE_PATH,
  API_ORIGIN,
  API_UPLOAD_DIR,
  AWS_S3_BUCKET_USER_UPLOADS,
  AWS_REGION,
  AWS_S3_ENDPOINT,
  NODE_ENV
}
