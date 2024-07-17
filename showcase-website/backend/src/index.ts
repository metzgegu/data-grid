
import express from 'express'
import fs from 'fs'
import cors from 'cors'
const loadJSON = (path: string) => JSON.parse(fs.readFileSync(new URL(path, import.meta.url)) as unknown as string);

const app = express()
app.use(cors())
const port = 3001

const paginate = (users: any[], page: number, limit: number) => {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results: { next?: { page: number, limit: number }, previous?: { page: number, limit: number } } = {};

  if (endIndex < users.length) {
    results.next = {
      page: page + 1,
      limit: limit
    }
  }

  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit
    }
  }

  return {
    users: users.slice(startIndex, endIndex),
    pageCount: Math.ceil(users.length / limit),
  }
}

app.get('/users', (req, res) => {
  const users = loadJSON('../users.json')

  if (req.query.page && req.query.limit) {
    const page = parseInt(req.query.page as string);
    const limit = parseInt(req.query.limit as string);
    
    res.json(paginate(users, page, limit))
    return
  }

  res.json(users)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
