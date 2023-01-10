import { defineController } from './$relay'
import { getUserInfoById, uploadUserIcon } from '$/domains/services/user'
import type { ICognitoUser } from '$/types'
import { CognitoUserId } from '$/domains/ValueObjects/Auth/CognitoUserId'
import type { MultipartFile } from '@fastify/multipart'

export type AdditionalRequest = {
  user: ICognitoUser
};

const handlePost = ({ user, file }: { user: ICognitoUser; file: MultipartFile }) => { 
  const cognitoUserId = new CognitoUserId(user.Username)

  uploadUserIcon({ iconFile: file, cognitoUserId})

  return user
}

export default defineController(() => ({
  get: (args) => ({
    status: 200,
    body: getUserInfoById('HOGE')
  }),
  post: async ({ user, body }) => ({
    status: 201,
    body: handlePost({ user, file: body.file })
  })
}))
