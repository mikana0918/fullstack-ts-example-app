import { defineController } from './$relay'
import { getUserByCognitoUserId } from '$/domains/services/user'
import { CognitoUserId } from '$/domains/ValueObjects/Auth/CognitoUserId'

export default defineController(() => ({
  get: async ({ params }) => {
    const cognitoUserId = new CognitoUserId(params.userId)

    const user = await getUserByCognitoUserId({ cognitoUserId })

    if (user === null) {
      return {
        status: 404,
        body: `User not found for [CognitoUserId: ${cognitoUserId}]`
      }
    }

    return {
      status: 200,
      body: {
        id: user.id,
        cognito_id: user.cognito_id,
        icon_path: user.icon_path
      }
    }
  }
}))
