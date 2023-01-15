import { CognitoUserId } from '$/domains/ValueObjects/Auth/CognitoUserId'

export type AuthHeader = {
  authorization: string
}

export interface ICognitoUserDTO {
  UserAttributes: { Name: string; value: string }[]
  Username: string
}

export type ICognitoUser = ICognitoUserDTO & { id: CognitoUserId }

import type { User } from '@prisma/client'
export type { User }
