const express = require('express')
const session = require('express-session')
const router = require ('./routes/router-main')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"));
app.use(session({
  secret: 'klinik mata permata',
  resave: false,
  saveUninitialized: true,
}))

app.use (router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})