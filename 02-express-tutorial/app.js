const express = require('express')
const app = express()
const logger = require('./logger')
const cookieParser = require('cookie-parser')

const people = require('./public/routes/people')
const auth = require('./public/routes/auth')

app.use(logger)

app.use(express.static('./public'))

app.use(express.urlencoded({ extended: false }))

app.use(express.json())

app.use(cookieParser())

app.use('/api/people', people)
app.use('/login', auth)

app.get('/', (req, res) => {

    res.send('Home')
})

app.get('/about', (req, res) => {

    res.send('About')
})

app.all('*', (req, res) => {
    res.status(404).send('resource not found')
})

app.listen(3000, () => {
    console.log('server is listening on port 3000....')
})

module.exports = logger