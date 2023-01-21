import { defineController } from './$relay'
import * as DomainService from '$/domains/services/user'
import type { ICognitoUser } from '$/types'

export type AdditionalRequest = {
  user: ICognitoUser
}

export default defineController(() => ({
  post: async ({ user, body }) => {
    const targetUser = await DomainService.createUserIfNotExists({
      cognitoUserId: user.id
    })

    if (body.file) {
      await DomainService.uploadUserIcon({
        iconFile: body.file,
        user: targetUser
      })
    }

    const updatedUser = await DomainService.updateUserInfo({ user: targetUser })

    return {
      status: 201,
      body: updatedUser
    }
  }
}))
