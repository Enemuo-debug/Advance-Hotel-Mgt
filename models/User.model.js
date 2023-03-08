const { model, Schema } = require("mongoose");
const Joi = require('joi')

const UserSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: ['Guest', `Admin`],
        default: 'Guest'
    },
    confirmPassword: {
        type: String,
        required: true,
    },
})
const User = model('User', UserSchema)
const UserValidator = Joi.object({
    name: Joi.string().alphanum().min(8).max(20).required().message('The data entered as Username does not match the pre-requisite standard for this site'),
    password: Joi.string().regex(/^[a-zA-Z0-9]{8,30}$/).required().message('The data entered as password does not match the pre-requisite standard for this site'),
    type: Joi.string().valid('Guest', 'Admin'),
    confirmPassword: Joi.ref('password').required().message('Passwords dont match'),
})


module.exports = {
    User, 
    UserValidator
}