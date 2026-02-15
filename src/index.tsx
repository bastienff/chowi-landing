import { Hono } from 'hono'
import { renderer } from './renderer'
import { InviteLayout } from './InviteLayout';

const app = new Hono()

app.use(renderer)

const APP_ID = "67Y9WPC6TJ.cl.chowi.app";

// Apple App Site Association file (for Universal Links)
app.get('/.well-known/apple-app-site-association', (c) => {
  const aasa = {
    applinks: {
      apps: [],
      details: [
        {
          appID: APP_ID,
          paths: ['/invite/*']
        }
      ]
    }
  }

  return c.json(aasa, 200, {
    'Content-Type': 'application/json',
    'Cache-Control': 'public, max-age=3600'
  })
})

// Alternative AASA location (both are checked by iOS)
app.get('/apple-app-site-association', (c) => {
  const aasa = {
    applinks: {
      apps: [],
      details: [
        {
          appID: APP_ID,
          paths: ['/invite/*']
        }
      ]
    }
  }

  return c.json(aasa, 200, {
    'Content-Type': 'application/json',
    'Cache-Control': 'public, max-age=3600'
  })
})

app.get('/', (c) => {
  return c.render(
    <div>chowi</div>
  )
})

app.get('/invite/:token', (c) => {
  const { token } = c.req.param()
  return c.render(
    <InviteLayout token={token} />
  )
})

export default app
