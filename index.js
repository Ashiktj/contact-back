const express = require('express')
const cors = require('cors')
const logic = require('./services/logic')

//create an app using express
const contact_server = express()

//using cors to connect frontend port
contact_server.use(
    cors({
        origin: 'http://localhost:3000'
    })
)

//create a middleware for parsing json data
contact_server.use(express.json())

//define port number
contact_server.listen(8001, () => {
    console.log('listening on the port 8001');
})


//API call for get all contact details
contact_server.get('/get-all-contacts', (req, res) => {
    logic.getAllcontacts().then((response) => {
        res.status(response.statusCode).json(response)
    })
})

//API call for add a contact details
contact_server.post('/add-contact', (req, res) => {
    logic.addContact(req.body.id, req.body.name, req.body.city, req.body.email, req.body.phone).then((response) => {
        res.status(response.statusCode).json(response)
    })
})

//API call for delete a contact details
contact_server.delete('/delete-contact/:id', (req, res) => {
    logic.delcontact(req.params.id).then((response) => {
        res.status(response.statusCode).json(response)
    })
})

//API call for get an contact details
contact_server.get('/get-contact/:id', (req, res) => {
    logic.getAContact(req.params.id).then((response) => {
        res.status(response.statusCode).json(response)
    })
})

contact_server.post('/update-contact/:id', (req, res) => {
    logic.updatecontact(req.params.id, req.body.name, req.body.city, req.body.email, req.body.phone).then((response) => {
        res.status(response.statusCode).json(response)
    })
})



