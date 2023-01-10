import { CognitoUserId } from '$/domains/ValueObjects/Auth/CognitoUserId'

export const storagePaths = {
  userUploadedIcon: (cognitoUserId: CognitoUserId) => `public/uploads/${cognitoUserId.value}/profile/icon`
}