export type UserInfo = {
  id: string
  name: string
  icon: string
}

export type AuthHeader = {
  authorization: string
}

export interface ICognitoUser {
  UserAttributes: { Name: string; value: string }[]
  Username: string
}