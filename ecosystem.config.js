module.exports = {
  apps: [
    {
      name: 'frourio-app',
      script: 'index.js',
      cwd: './server/',
      instances: 1,
      wait_ready: true,
      listen_timeout: 10000,
      env: {
        NODE_ENV: 'development'
      },
      node_args: ['--max_old_space_size=1500'],
      env_production: {
        NODE_ENV: 'production',
        API_DATABASE_URL: process.env.API_DATABASE_URL,
        API_JWT_SECRET: process.env.API_JWT_SECRET,
        API_USER_ID: process.env.API_USER_ID,
        API_USER_PASS: process.env.API_USER_PASS,
        API_ORIGIN: process.env.API_ORIGIN,
        API_BASE_PATH: process.env.API_BASE_PATH,
        API_SERVER_PORT: process.env.API_SERVER_PORT,
        API_UPLOAD_DIR: process.env.API_UPLOAD_DIR,
        AWS_REGION: process.env.AWS_REGION,
        AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
        AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
        AWS_S3_ENDPOINT: process.env.AWS_S3_ENDPOINT,
        AWS_S3_BUCKET_USER_UPLOADS: process.env.AWS_S3_BUCKET_USER_UPLOADS
      }
    }
  ],

  deploy: {
    production: {
      user: process.env.API_DEPLOY_USER,
      host: process.env.API_DEPLOY_HOST,
      repo: process.env.API_DEPLOY_REPO,
      ref: 'origin/main',
      path: '/opt/apiserver',
      ssh_options: ['StrictHostKeyChecking=no'],
      'pre-deploy-local': '',
      'post-deploy': [
        'npm install --production=false',
        'npm install --prefix server --production=false',
        'npm run build:server',
        'npm run migrate:deploy',
        'npx pm2 startOrRestart ecosystem.config.js --env production'
      ].join(' && '),
      'pre-setup': '',
      env: {
        NODE_ENV: 'production',
        API_DATABASE_URL: process.env.API_DATABASE_URL,
        API_JWT_SECRET: process.env.API_JWT_SECRET,
        API_USER_ID: process.env.API_USER_ID,
        API_USER_PASS: process.env.API_USER_PASS,
        API_ORIGIN: process.env.API_ORIGIN,
        API_BASE_PATH: process.env.API_BASE_PATH,
        API_SERVER_PORT: process.env.API_SERVER_PORT,
        API_UPLOAD_DIR: process.env.API_UPLOAD_DIR,
        AWS_REGION: process.env.AWS_REGION,
        AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
        AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
        AWS_S3_ENDPOINT: process.env.AWS_S3_ENDPOINT,
        AWS_S3_BUCKET_USER_UPLOADS: process.env.AWS_S3_BUCKET_USER_UPLOADS
      }
    }
  }
}
