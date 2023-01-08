import type { AuthHeader } from '$/types'

export type Methods = {
  get: {
    reqHeader: AuthHeader
    resBody: string
  }
}
