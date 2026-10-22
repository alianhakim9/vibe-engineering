import { Elysia } from 'elysia'

const app = new Elysia()
  .get('/', () => ({ status: 'ok', uptime: process.uptime() }))
  .listen(process.env.PORT ?? 3000)

console.log(`🦊 Server running at ${app.server?.url}`)
