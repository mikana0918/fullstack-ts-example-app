import fastify from 'fastify'
import controller from '$/api/article/controller'
import { articleInfoFactory } from '$/api/article/factory'
import { promisify } from 'util'
import type { ArticleInfo } from '$/domains/services/article'

describe('Test api/articles', () => {
  test('should list articles', () => {
    const articleInfoList = articleInfoFactory.buildList(3)
    const mockPromiseResponse = promisify<ArticleInfo[]>(() => {
      return articleInfoList
    })

    const mockedController = controller.inject(() => ({
      getArticles: mockPromiseResponse
    }))(fastify())

    mockedController
      .get({
        query: {
          search: undefined // Leave this empty
        }
      })
      .then((res) => {
        if (res.status !== 200) fail('Response must be successful')

        expect(res.body).toContainEqual(articleInfoList)
      })
      .catch((err) => {
        throw err
      })
  })
})
