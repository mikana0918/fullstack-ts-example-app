import type {
  FastifyRequest,
  FastifyReply,
  HookHandlerDoneFunction
} from 'fastify'
import { getUserFromAuthHeader } from '$/app/services/auth/handler'
import * as Either from 'fp-ts/Either'
import { CognitoUserId } from '$/domains/ValueObjects/Auth/CognitoUserId'

export const checkAuth = async (
  req: FastifyRequest,
  reply: FastifyReply,
  done: HookHandlerDoneFunction
) => {
  const verifyEither = await getUserFromAuthHeader({
    headers: { authorization: req.headers.authorization ?? null }
  })

  if (Either.isLeft(verifyEither)) {
    done(verifyEither.left)
  }

  if (Either.isRight(verifyEither)) {
    const { cognitoUser } = verifyEither.right

    // populate auth user
    req.user = {
      ...cognitoUser,
      id: new CognitoUserId(cognitoUser.Username)
    }
  }
}
