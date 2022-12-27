import { PrismaClient } from '@prisma/client'
import { main as seedTasks } from './seeders/tasks'
import { main as seedArticles } from './seeders/article'

const prisma = new PrismaClient()

async function main() {
  await seedTasks()
  await seedArticles()
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
