import { getArticles } from '$/service/article'
import { defineController } from './$relay'

export default defineController(() => ({
  get: async ({ query }) => ({
    status: 200,
    body: await getArticles(query?.search)
  })
}))
