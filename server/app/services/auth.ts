import axios from "axios"
import * as Either from "fp-ts/Either";
import type { Either as IEither } from "fp-ts/Either"

const COGNITO_URL = `https://cognito-idp.ap-northeast-1.amazonaws.com/`

interface ICognitoUser {
  UserAttributes: { Name: string; value: string; }[]
  Username: string
}

export const getUserFromAuthHeader = async ({ headers }: { headers: { authorization: string | null } }): Promise<IEither<Error, { accessToken: string; cognitoUser: ICognitoUser}>> => {
  if (headers.authorization === null) {
    throw new Error("authorization header should not be null.")
  }

  try {
    const accessToken = headers.authorization.split(' ')[1]
    console.log(accessToken)

    const { data: cognitoUser } = await axios.post<ICognitoUser>(
      COGNITO_URL,
      {
        AccessToken: accessToken
      },
      {
        headers: {
          'Content-Type': 'application/x-amz-json-1.1',
          'X-Amz-Target': 'AWSCognitoIdentityProviderService.GetUser'
        }
      }
    )

    return Either.right({
      accessToken,
      cognitoUser
    })
  
  } catch (error) {
    if (error instanceof Error) {
        return Either.left(error)
    } else {
        return Either.left(new Error('failed'))
    }
  }
}