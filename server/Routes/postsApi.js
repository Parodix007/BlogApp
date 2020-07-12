const express = require('express')
const route = express.Router()
const mongoose = require('mongoose')
route.get('/', (req, res) => {
    mongoose.connect('mongodb://localhost/BlogApp', {useNewUrlParser: true}, (err) => err && res.send(err))
    const postSchema = require('../Schema/posts')

    const post = mongoose.model('Post', postSchema, 'posts')

    post.find({}, (err,response) => res.json(response))
    
})


module.exports = route