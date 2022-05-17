const express = require('express')
const mongoose= require('mongoose')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`)
})

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true})
.then(() => console.log('Connection to database initialized.'))
.catch(() => console.log('Failed to connect to database.'))

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*'])
    res.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
    res.append('Access-Control-Allow-Headers', 'Content-Type')
    next()
})

/**
 * Routes
 */
const signup = require('./routes/signUp')
app.use('/signup', signup)

const signin = require('./routes/signIn')
app.use('/signin', signin)

const posts = require('./routes/posts')
app.use('/posts', posts)