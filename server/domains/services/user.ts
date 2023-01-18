import type { MultipartFile } from '@fastify/multipart'
import { s3Service } from '$/app/services/storage/handler'
import { storagePaths } from '$/app/services/storage/paths'
import { CognitoUserId } from '$/domains/ValueObjects/Auth/CognitoUserId'
import { PrismaClient } from '@prisma/client'
import type { User } from '@prisma/client'
import { AWS_S3_BUCKET_USER_UPLOADS } from '$/env'

const prisma = new PrismaClient()

export const uploadUserIcon = async ({
  iconFile,
  user
}: {
  iconFile: MultipartFile
  user: User
}) => {
  const userUploadIconKey = storagePaths.userUploadedIcon({
    fileName: iconFile.filename,
    cognitoUserId: new CognitoUserId(user.cognito_id)
  })

  const fileBuffer = await iconFile.toBuffer()

  const onSuccessCallback = async () => {
    await prisma.user.update({
      where: {
        cognito_id: user.cognito_id
      },
      data: {
        icon_path: `${AWS_S3_BUCKET_USER_UPLOADS}/${userUploadIconKey}`
      }
    })
  }

  return await s3Service
    .upload({
      file: fileBuffer,
      storageKey: userUploadIconKey
    })
    .promise()
    .then(async (_) => {
      await onSuccessCallback()
    })
    .catch((err) => {
      console.error(err)
      throw err
    })
}

export const getUserByCognitoUserId = async ({
  cognitoUserId
}: {
  cognitoUserId: CognitoUserId
}) => {
  return await prisma.user.findFirst({
    where: { cognito_id: cognitoUserId.toString() }
  })
}

export const createUserIfNotExists = async ({
  cognitoUserId
}: {
  cognitoUserId: CognitoUserId
}) => {
  const user = await prisma.user.findFirst({
    where: {
      cognito_id: cognitoUserId.toString()
    }
  })

  if (user === null) {
    return await prisma.user.create({
      data: {
        cognito_id: cognitoUserId.toString()
      }
    })
  }

  return user
}
