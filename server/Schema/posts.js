const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
    title:String,
    desc:String,
    author:String
})

module.exports = postSchema