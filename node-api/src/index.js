import jsonServer from "json-server"
import path from "path"
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
  res.json({ test: "ok" })
})

server.post("/login", (req, res) => {
  res.json({ user: "test" })
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  // if (req.method === 'POST') {
  //   req.body.createdAt = Date.now()
  // }
  // Continue to JSON Server router
  next()
})

// custom routes
server.use(router)

server.listen(8080, () => console.log(`Server listening to 8080 ${8080}`));