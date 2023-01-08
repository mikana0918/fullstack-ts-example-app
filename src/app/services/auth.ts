import { Amplify } from '@aws-amplify/core'

// @see: https://docs.amplify.aws/lib/auth/emailpassword/q/platform/js/
export const AmplifyAuthModule = {
  getCurrentToken: async () => {
    try {
      const currentSession = await Amplify.Auth.currentSession()

      const accessToken = currentSession.getAccessToken()
      const jwt = accessToken.getJwtToken()

      return jwt
    } catch (error) {
      console.log('failed to get current auth token', error)
    }
  },
  signIn: async ({
    username,
    password
  }: {
    username: string
    password: string
  }) => {
    try {
      const user = await Amplify.Auth.signIn(username, password)

      return user
    } catch (error) {
      console.log('error signing in', error)
    }
  },
  signOut: async () => {
    try {
      await Amplify.Auth.signOut()
    } catch (error) {
      console.log('error signing out: ', error)
    }
  }
}
