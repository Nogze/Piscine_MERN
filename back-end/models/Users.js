const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UsersSchema = mongoose.Schema({
    login: {
        type: String,
        unique: true,
        required: true,
        minLength: 5,
        maxLength: 20
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false,
        required: true
    }
})

UsersSchema.pre('save', function(next) {
    var user = this
    if (!user.isModified('password')) return next()
    bcrypt.genSalt((error, salt) => {
        if (error) return next(error)
        bcrypt.hash(user.password, salt, (error, hash) => {
            if (error) return next(error)
            user.password = hash
            next()
        })
    })
})

module.exports = mongoose.model('Users', UsersSchema)