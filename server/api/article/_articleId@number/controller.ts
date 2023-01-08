import { getArticle } from '$/domains/services/article'
import { defineController } from './$relay'

export default defineController(() => ({
  get: async ({ params: { articleId } }) =>
    ((article) =>
      article
        ? {
            status: 200 as const,
            body: article
          }
        : { status: 404 as const })(await getArticle(articleId))
}))
