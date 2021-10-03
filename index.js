const express = require('express')
const bodyParser = require('body-parser')
const controllers = require('./controllers')
const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/users', controllers.users)
app.use('/courses', controllers.courses)

app.listen(port, () => console.log(`Algaworks-API listening at http://localhost:${port}!`))

