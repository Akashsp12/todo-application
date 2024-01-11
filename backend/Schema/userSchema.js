const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    Name: String,
    Provider: String
})

const schema = mongoose.model('user', userSchema)
module.exports = schema