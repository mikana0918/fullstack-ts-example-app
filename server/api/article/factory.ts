import * as Factory from 'factory.ts'
import type { ArticleInfo } from '$/domains/services/article'

export const articleInfoFactory = Factory.Sync.makeFactory<ArticleInfo>({
  id: Factory.each((i) => i),
  title: `This is testing article info title: ${Factory.each((i) => i)}`,
  body: `This is testing article info body: ${Factory.each((i) => i)}`
})
