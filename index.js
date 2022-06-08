const express = require('express')
var cookieParser = require('cookie-parser')
const app = express()
const port = 3000

app.use(cookieParser())

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/login/:name', (req, res) => {
  let { name } = req.params;
  if (name !== undefined) {
    console.log(res.cookies);
  }
  res.send(`Logging in as: ${name}`).cookie('name', name, { expires: new Date(Date.now() + 3600)})
})

app.get('/hello', (req, res) => {
  let { name } = req.cookies;

  if (name !== undefined) {
    res.send(`Welcome ${name}!`)
  } else {
    res.send(`Please login first.`)
  }

})