import type { ArticleInfo } from '$/domains/services/article'

export type Methods = {
  get: {
    query: { search?: string }
    resBody: ArticleInfo[]
  }
}
