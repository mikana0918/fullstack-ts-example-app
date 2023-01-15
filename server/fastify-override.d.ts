import type { ICognitoUser } from '$/types'

declare module '@fastify/jwt' {
  interface FastifyJWT {
    user: ICognitoUser
  }
}
