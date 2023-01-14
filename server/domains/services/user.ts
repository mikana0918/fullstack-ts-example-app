import fs from 'fs'
import path from 'path'
import type { MultipartFile } from '@fastify/multipart'
import { API_ORIGIN, API_USER_ID, API_USER_PASS, API_UPLOAD_DIR } from '$/env'
import { s3Service } from '$/app/services/storage/handler'
import { storagePaths } from '$/app/services/storage/paths'
import { CognitoUserId } from '$/domains/ValueObjects/Auth/CognitoUserId'
import { PrismaClient } from '@prisma/client'
import type { User } from '@prisma/client'

const prisma = new PrismaClient()

const iconsDir = API_UPLOAD_DIR && path.resolve(API_UPLOAD_DIR, 'icons')

const createIconURL = (dir: string, name: string) =>
  `${API_ORIGIN}/${dir}icons/${name}`

const getUserIconName = () => {
  return 'user-icon'
}

const getUserInfo = () => {
  const iconName = getUserIconName()
  return {
    name: 'sample user',
    icon:
      iconsDir && fs.existsSync(path.resolve(iconsDir, iconName))
        ? createIconURL('upload/', iconName)
        : createIconURL('static/', 'dummy.svg')
  }
}

export const validateUser = (id: string, pass: string) =>
  id === API_USER_ID && pass === API_USER_PASS

export const changeIcon = async (id: string, iconFile: MultipartFile) => {
  const iconName = getUserIconName()

  if (!iconsDir) {
    throw new Error('API_UPLOAD_DIR is not configured.')
  }

  await fs.promises.mkdir(iconsDir, { recursive: true })

  await fs.promises.writeFile(
    path.resolve(iconsDir, iconName),
    await iconFile.toBuffer()
  )

  return {
    id,
    ...getUserInfo()
  }
}

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
        icon_path: userUploadIconKey
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
