import { defineController } from './$relay'
import axios from 'axios'

export default defineController(() => ({
  get: (req) => ({
    status: 200,
    body: 'hello'
  }),
  // post: async ({ user }) => ({
  //   status: 201,
  //   body: await signup({ user })
  // })
}))
