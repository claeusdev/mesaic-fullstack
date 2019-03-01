const express = require('express')
const app = express()
const morgan = require('morgan')
require('dotenv').config()

const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes')
// Contains handlers
const controller = require('./controllers')

const port = process.env.PORT || 4002

app.use(cors())
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.json())
app.use(morgan('dev'))

app.get('/', (req, res) => res.json({ hello: 'Hello World' }))

app.use('/api/student', routes.students)

app.use(controller.notFound)

app.use(controller.errors)
app.listen(port, console.log(`server is running on port ${port}`))
