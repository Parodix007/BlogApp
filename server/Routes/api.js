const express = require('express')

const route = express.Router()

route.get('/', (req, res) => res.json({cos:'tam', number:12134, trele:'morele'}))


module.exports = route