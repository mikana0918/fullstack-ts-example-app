import type {
  FastifyRequest,
  FastifyReply,
  HookHandlerDoneFunction
} from 'fastify'
import { getUserFromAuthHeader } from '$/app/services/auth/handler'
import * as Either from 'fp-ts/Either'

export const checkAuth = async (
  req: FastifyRequest,
  reply: FastifyReply,
  done: HookHandlerDoneFunction
) => {
  const eitherUserOrError = await getUserFromAuthHeader({
    headers: { authorization: req.headers.authorization ?? null }
  })

  if (Either.isLeft(eitherUserOrError)) {
    done(eitherUserOrError.left)
  }
}
