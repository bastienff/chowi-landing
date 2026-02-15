import { jsxRenderer } from 'hono/jsx-renderer'
import { Link, ViteClient } from 'vite-ssr-components/hono'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html>
      <head>
        <ViteClient />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Link href="/src/style.css" rel="stylesheet" />
      </head>
      <body className="bg-linear-to-br from-purple-50 via-pink-50 to-blue-50 min-h-screen">
        {children}
      </body>
    </html>
  )
})
