import { defineController } from './$relay'
import { getTasks, createTask } from '$/domains/services/tasks'
import { z } from 'zod'

const print = (text: string) => console.log(text)

export default defineController({ getTasks, print }, ({ getTasks, print }) => ({
  get: async ({ query }) => {
    if (query?.message) print(query.message)

    return { status: 200, body: await getTasks(query?.limit) }
  },
  post: {
    validators: {
      body: z.object({ label: z.string() })
    },
    handler: async ({ body }) => {
      const b = await createTask(body.label)

      return { status: 201, body: b }
    }
  }
}))
