import { CognitoUserId } from '$/domains/ValueObjects/Auth/CognitoUserId'

export const storagePaths = {
  userUploadedIcon: ({ fileName, cognitoUserId }: {fileName: string; cognitoUserId: CognitoUserId}) => `public/uploads/${cognitoUserId.value}/profile/${fileName}`
}