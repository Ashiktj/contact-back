//import db.js
const db = require('../services/db')

//logic for get all employee from the database
const getAllcontacts = () => {
    return db.contact.find().then(
        (result) => {
            if (result) {
                return {
                    statusCode: 200,
                    contacts: result
                }
            }
            else {
                return {
                    statusCode: 404,
                    contacts: 'contacts not found'
                }
            }
        }
    )
}

//logic for add contact
const addContact = (id, name, city, email, phone) => {
    return db.contact.findOne({ id }).then((result) => {
        if (result) {
            return {
                statusCode: 404,
                message: "Contact Already Exist"
            }
        }
        else {
            const newContact = new db.contact({ id, name, city, email, phone })
            newContact.save()
            return {
                statusCode: 200,
                message: "Contact Added Succesfully...."
            }
        }
    })
}

//logic for delete a contact
const delcontact = (id) => {
    return db.contact.deleteOne({ id })
        .then((response) => {
            return {
                statusCode: 200,
                message: "Contact Deleted Successfully"
            }

        })
        .catch((error) => {
            return {
                statusCode: 401,
                message: "Can't delete a contact from the database"
            }
        })
}

//logic for get a contact
const getAContact = (id) => {
    return db.contact.findOne({ id }).then(
        (result) => {
            if (result) {
                return {
                    statusCode: 200,
                    contact: result
                }
            }
            else {
                return {
                    statusCode: 404,
                    contact: 'contact not found'
                }
            }
        }
    )


}






const updatecontact = (id, name, city, email, phone) => { 
    return db.contact.findOne({ id }).then(
        (result) => {
            if (result) {
                result.id = id;
                result.name = name;
                result.city = city;
                result.email = email;
                result.phone = phone;
                
                result.save();
                return {
                    statusCode: 200,
                    message: 'Contact details updated successfully'
                }
            }
            else {
                return {
                    statusCode: 404,
                    message: 'contact not found'
                }
            }
        }
    )
}


module.exports = {
    getAllcontacts,
    addContact,
    delcontact,
    getAContact,
     updatecontact

}