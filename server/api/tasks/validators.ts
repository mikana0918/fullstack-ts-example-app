import { z } from 'zod'
import { defineValidators } from './$relay'

export default defineValidators(() => ({
  body: z.object({ label: z.string() })
}))
