import { defineController } from './$relay'
import { getUserByCognitoUserId } from '$/domains/services/user'
import type { ICognitoUser } from '$/types'

export type AdditionalRequest = {
  user: ICognitoUser
}

export default defineController(() => ({
  get: async ({ user }) => {
    const authUser = await getUserByCognitoUserId({ cognitoUserId: user.id })

    return {
      status: 200,
      body: authUser
    }
  }
}))
