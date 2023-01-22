import type { User } from '@prisma/client'
import type { ReadStream } from 'fs'

export type Methods = {
  post: {
    reqFormat: FormData
    reqBody: {
      file?: File | ReadStream
      user_name: User['user_name']
    }
    resBody: User
  }
}
