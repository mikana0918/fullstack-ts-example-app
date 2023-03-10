import { depend } from 'velona'
import { PrismaClient } from '@prisma/client'
import type { Task, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export const getTasks = depend(
  { prisma: prisma as { task: { findMany(): Promise<Task[]> } } },
  async ({ prisma }, limit?: number) =>
    (await prisma.task.findMany()).slice(0, limit)
)

export const createTask = (label: string) =>
  prisma.task.create({ data: { label } })

export const updateTask = (
  id: Task['id'],
  partialTask: Prisma.TaskUpdateInput
) => prisma.task.update({ where: { id }, data: partialTask })

export const deleteTask = (id: Task['id']) =>
  prisma.task.delete({ where: { id } })
