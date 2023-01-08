import { defineController } from './$relay'
import { updateTask, deleteTask } from '$/domains/services/tasks'

export default defineController(() => ({
  patch: async ({ body, params }) => {
    await updateTask(params.taskId, body)
    return { status: 204 }
  },
  delete: async ({ params }) => {
    await deleteTask(params.taskId)
    return { status: 204 }
  }
}))
