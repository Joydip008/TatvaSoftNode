const mongoose = require('mongoose')
const validate = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


/** User Schema */

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        trim:  true,
        validate(value){
            if(value.length>200) {
                throw new Error('First name value under 200 characters')
            }
        }
    },
    last_name: {
        type: String,
        required: true,
        trim:  true,
        validate(value){
            if(value.length>200) {
                throw new Error('Last name value under 200 characters')
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim:  true,
        lowercase: true,
        validate(value){
            if(value.length>200) {
                throw new Error('Email value under 200 characters')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim:  true,
    },
    dob: {
        type: Date,
        required: true,
    },
    role: {
        type: String,
        required: true,
        trim:  true,
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User