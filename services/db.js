//node+mongodb connection

//import mongoose
const mongoose = require('mongoose')

//connection string
mongoose.connect('mongodb://localhost:27017/Contacts')

//create a model
const contact = mongoose.model('contact',
    {

        id: String,
        name: String,
        city: String,
        email: String,
        phone: String

    })

module.exports = { contact }