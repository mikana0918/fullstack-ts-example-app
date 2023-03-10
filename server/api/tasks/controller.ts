import { defineController } from './$relay'
import { getTasks, createTask } from '$/domains/services/tasks'
import { z } from 'zod'

const print = (text: string) => console.log(text)

export default defineController(
  { getTasks, print, createTask },
  ({ getTasks, print, createTask }) => ({
    get: async ({ query }) => {
      if (query?.message) print(query.message)

      return { status: 200, body: await getTasks(query?.limit) }
    },
    post: {
      validators: {
        body: z.object({ label: z.string() })
      },
      handler: async ({ body }) => {
        const newTask = await createTask(body.label)

        return { status: 201, body: newTask }
      }
    }
  })
)
