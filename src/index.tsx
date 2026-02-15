import { Hono } from 'hono'
import { renderer } from './renderer'

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
  return c.render(
    <div class="container">
      <h1>🎉 Recibiste una invitación!</h1>
      <p>Has recibido una invitación para unirte a nuestra aplicación.</p>
      <p>Descarga la aplicación para aceptar la invitación y vuelve a abrir este enlace para unirte a nosotros.</p>
      <a href="#">
        Descargar aplicación
      </a>
    </div>
  )
})

export default app
