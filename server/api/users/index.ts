import type { User } from '@prisma/client'
import type { ReadStream } from 'fs'

export type Methods = {
  post: {
    reqFormat: FormData
    reqBody: { file: File | ReadStream }
    resBody: User
  }
}