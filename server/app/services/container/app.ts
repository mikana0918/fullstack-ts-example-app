import path from 'path'
import Fastify, { FastifyServerFactory } from 'fastify'
import helmet from '@fastify/helmet'
import cors from '@fastify/cors'
import fastifyStatic from '@fastify/static'
import fastifyJwt from '@fastify/jwt'
import { API_JWT_SECRET, API_BASE_PATH, API_UPLOAD_DIR } from '$/env'
import server from '$/$server'
import { registerProviderAWS } from 'infra/providers/aws'

export const init = (serverFactory?: FastifyServerFactory) => {
  const app = Fastify({
    maxParamLength: 1000, // This defaults to 100: returns 404 error params surpass this length
    ...serverFactory
  })
  registerProviderAWS()
  app.register(helmet, { crossOriginResourcePolicy: false })
  app.register(cors)
  app.register(fastifyStatic, {
    root: path.join(__dirname, 'static'),
    prefix: '/static/'
  })
  if (API_UPLOAD_DIR) {
    app.after(() => {
      app.register(fastifyStatic, {
        root: path.resolve(__dirname, API_UPLOAD_DIR),
        prefix: '/upload/',
        decorateReply: false
      })
    })
  }
  app.register(fastifyJwt, { secret: API_JWT_SECRET })
  server(app, { basePath: API_BASE_PATH })
  return app
}
