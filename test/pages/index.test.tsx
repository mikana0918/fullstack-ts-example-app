import dotenv from 'dotenv'
// import Fastify, { FastifyInstance } from 'fastify'
// import cors from '@fastify/cors'
// import aspida from '@aspida/axios'
// import api from '$/api/$api'
import Home from '~/pages/index'
import { render } from '../testUtils'
import { AmplifyAuthModule } from '~/app/services/auth'
// import { useAuth } from '~/hooks/useAuth'

dotenv.config({ path: 'server/.env' })
jest.mock('next/router', () => require('next-router-mock'))
jest.spyOn(AmplifyAuthModule, 'getCurrentToken').mockResolvedValue('some-token')

// const apiClient = api(aspida(undefined, { baseURL: process.env.API_BASE_PATH }))
// const res = function <T extends () => unknown>(
//   data: ReturnType<T> extends Promise<infer S> ? S : never
// ) {
//   return data
// }

// let fastify: FastifyInstance

beforeAll(() => {
  // fastify = Fastify({ forceCloseConnections: true })
  // fastify.register(cors)
  // fastify.get(apiClient.users.me.$path(), (_, reply) => {
  //   reply.send(
  //     res<typeof apiClient.users.me.$get>({
  //       id: 1,
  //       cognito_id: 'AWS-COGNITO-TEST-ID',
  //       icon_path: '/sample',
  //       user_name: 'test-user'
  //     })
  //   )
  // })
  // return fastify.listen({ port: +(process.env.API_SERVER_PORT ?? '8080') })
})

// afterAll(() => fastify.close())

describe('Home page', () => {
  it('sample', () => {
    expect(true).toBe(true)
  })
  // it('shows tasks', async () => {
  //   const { findByText } = render(<Home />)

  //   expect(await findByText('Welcome!')).toBeTruthy()
  // })
})
