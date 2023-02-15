import { getArticles } from '$/domains/services/article'
import { defineController } from './$relay'

export default defineController({ getArticles }, ({ getArticles }) => ({
  get: async ({ query }) => ({
    status: 200,
    body: await getArticles(query?.search)
  })
}))
