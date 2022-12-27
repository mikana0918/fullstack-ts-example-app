import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export type ArticleInfo = {
  id: number
  title: string
  body: string
}

export const getArticles = async (search?: string) => {
  const filtered = await prisma.article.findMany()

  return filtered.filter(
    (article) =>
      !search ||
      search
        .toLowerCase()
        .split(/\s+/)
        .every(
          (word) =>
            (article.title + article.body)
              .replace(/\s/g, '')
              .toLowerCase()
              .search(word.toLowerCase()) >= 0
        )
  )
}

export const getArticle = async (id: number) => {
  return await prisma.article.findFirst({
    where: { id }
  })
}
