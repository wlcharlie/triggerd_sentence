const express = require("express")
const exphbs = require("express-handlebars")
const bodyParser = require("body-parser")
const wordPackage = require("./sentence")
const app = express()

// 正在研究helper中...，除了保留使用者點選過的資料功能還未做出QQ
app.engine("hbs", exphbs({
  helpers: {
    ifEqual: function (a, b) {
      if (a === b) {
        return "checked"
      }
    }
  }, defaultLayout: 'main', extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const sentence = wordPackage(options.character)
  res.render('index', { options, sentence })
})

app.listen(4000, () => {
  console.log('listening on http://localhost:4000')
})