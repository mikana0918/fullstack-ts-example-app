import type { User } from '@prisma/client'

export type Methods = {
  get: {
    resBody: User | null
  }
}
