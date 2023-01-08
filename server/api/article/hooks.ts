import { defineHooks } from './$relay'
import { getUserFromAuthHeader } from '$/app/services/auth'
import * as Either from 'fp-ts/Either'

export default defineHooks(() => ({
  onRequest: async (req, reply, done) => {
    const eitherUserOrError = await getUserFromAuthHeader({
      headers: { authorization: req.headers.authorization ?? null }
    })

    if (Either.isLeft(eitherUserOrError)) {
      reply.code(401).send(eitherUserOrError)
    }

    done()
  }
}))
