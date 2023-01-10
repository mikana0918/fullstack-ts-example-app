import type { UserInfo } from '$/types'
import type { ReadStream } from 'fs'
import type { ICognitoUser } from '$/types'

export type Methods = {
  get: {
    resBody: UserInfo
  }

  post: {
    reqFormat: FormData
    reqBody: { file: File | ReadStream }
    resBody: ICognitoUser
  }
}
