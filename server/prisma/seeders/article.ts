import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function main() {
  const article1 = await prisma.article.upsert({
    create: {
      title: 'これはサンプルタイトル1です',
      body: 'これはbody1です'
    },
    where: {
      id: 1
    },
    update: {}
  })

  const article2 = await prisma.article.upsert({
    create: {
      title: 'これはサンプルタイトル2です',
      body: 'これはbody2です'
    },
    where: {
      id: 2
    },
    update: {}
  })

  console.log({ article1, article2 })
}
