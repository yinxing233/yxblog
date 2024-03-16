import express from 'express'

const app = express()

app.get('/', (req, res) => {
  console.log('here')
  res.send('你好')
})

app.listen(3001)
