import { defineController } from './$relay'
import { getUserInfoById, changeIcon } from '$/domains/services/user'

export default defineController(() => ({
  get: (args) => ({
    status: 200,
    body: getUserInfoById(args.headers.authorization)
  }),
  post: async (args) => ({
    status: 201,
    body: await changeIcon(args.headers.authorization, args.body.icon)
  })
}))
