import { defineController } from './$relay'
import { uploadUserIcon, createUserIfNotExists } from '$/domains/services/user'
import type { ICognitoUser } from '$/types'

export type AdditionalRequest = {
  user: ICognitoUser
}

export default defineController(() => ({
  post: async ({ user, body }) => {
    const createOrFetchedUser = await createUserIfNotExists({
      cognitoUserId: user.id
    })

    await uploadUserIcon({ iconFile: body.file, user: createOrFetchedUser })

    return {
      status: 201,
      body: createOrFetchedUser
    }
  }
}))
