const mongoose = require('mongoose')

const userScheme = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },

    email: {
        type: String,
        trim: true,
        unique: 1
    },

    password: {
        type: String,
        maxlength: 5
    },

    role: {
        type: Number,
        default: 0
    },

    image: String,

    token: {
        type: String
    },

    tokenExp: {
        type: Number
    }
})

const User = mongoose.model('User', userScheme)

module.exports(User)