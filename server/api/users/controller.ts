import { defineController } from './$relay'
import { uploadUserIcon, createUserIfNotExists } from '$/domains/services/user'
import type { ICognitoUser } from '$/types'
import type { MultipartFile } from '@fastify/multipart'

export type AdditionalRequest = {
  user: ICognitoUser
}

const handlePost = async ({
  user,
  file
}: {
  user: ICognitoUser
  file: MultipartFile
}) => {
  const createOrFetchedUser = await createUserIfNotExists({
    cognitoUserId: user.id
  })

  await uploadUserIcon({ iconFile: file, user: createOrFetchedUser })

  return createOrFetchedUser
}

export default defineController(() => ({
  post: async ({ user, body }) => ({
    status: 201,
    body: await handlePost({ user, file: body.file })
  })
}))
