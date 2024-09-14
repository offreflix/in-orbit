import fastify from 'fastify'
import { createGoal } from '../services/create-goal'
import z from 'zod'

const app = fastify()

app.post('/goals', async (request) => {
  const createGoalSchema = z.object({
    title: z.string(),
    desiredWeeklyFrequency: z.number(),
  })

  const body = createGoalSchema.parse(request.body)

  await createGoal({
    title: body.title,
    desiredWeeklyFrequency: body.desiredWeeklyFrequency,
  })
})

app.listen({ port: 3333 }).then(() => {
  console.log('Server listening on port 3333')
})
