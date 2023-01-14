import { CognitoUserId } from '$/domains/ValueObjects/Auth/CognitoUserId'

export type UserInfo = {
  id: string
  name: string
  icon: string
}

export type AuthHeader = {
  authorization: string
}

export interface ICognitoUserDTO {
  UserAttributes: { Name: string; value: string }[]
  Username: string
}

export type ICognitoUser = ICognitoUserDTO & { id: CognitoUserId }
