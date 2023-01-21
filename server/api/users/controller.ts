import { defineController } from './$relay'
import * as DomainService from '$/domains/services/user'
import type { ICognitoUser } from '$/types'

export type AdditionalRequest = {
  user: ICognitoUser
}

export default defineController(() => ({
  post: async ({ user, body }) => {
    const u = await DomainService.createUserIfNotExists({
      cognitoUserId: user.id
    })

    if (body.file) {
      await DomainService.uploadUserIcon({
        iconFile: body.file,
        user: u
      })
    }

    const updatedUser = await DomainService.updateUserInfo({
      cognito_id: user.id.toString(),
      user_name: body.user_name
    })

    return {
      status: 201,
      body: updatedUser
    }
  }
}))
