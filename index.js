const express = require('express')
const bodyParser = require('body-parser')
const controllers = require('./controllers')
const cors = require('cors')
const app = express()
const port = 3001

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('ALGAWORKS API!')
})

app.use('/usuarios', controllers.usuarios)
app.use('/cursos', controllers.cursos)
app.use('/modulos', controllers.modulos)
app.use('/conteudos', controllers.conteudos)

app.listen(port, () => console.log(`Algaworks-API listening at http://localhost:${port}!`))

