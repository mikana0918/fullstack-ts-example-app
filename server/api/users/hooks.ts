import { defineHooks } from './me/$relay'
import { checkAuth } from '$/middleware/auth'

export default defineHooks(() => ({
  onRequest: async (req, reply, done) => {
    await checkAuth(req, reply, done)
  }
}))
