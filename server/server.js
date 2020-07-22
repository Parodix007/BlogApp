'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const port = 8000

app.use( bodyParser.urlencoded( { extended:true } ) )
app.use( cors() )

//Api`s
const postsApi = require('./Routes/postsApi')

//Routes
app.get('/', (req,res) => res.send('Server here'))
app.use('/posts', postsApi)

app.listen(port, () => console.log(`Server is running on port ${port}`))