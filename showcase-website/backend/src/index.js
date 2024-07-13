
// const express = require('express')
import express from 'express'
import fs from 'fs'
import cors from 'cors'
const loadJSON = (path) => JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));

const app = express()
app.use(cors())
const port = 3001

app.get('/users', (req, res) => {
  const users = loadJSON('../users.json')
  res.json(users)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
