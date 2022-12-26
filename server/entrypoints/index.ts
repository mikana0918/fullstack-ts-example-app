import { init } from '$/service/app'
import { API_SERVER_PORT } from '$/service/envValues'


init()
  .listen({ port: API_SERVER_PORT, host: '0.0.0.0' })
  .then(() => {
    // PM2 graceful start
    // See also https://pm2.keymetrics.io/docs/usage/signals-clean-restart/
    process.send?.('ready')
  })

