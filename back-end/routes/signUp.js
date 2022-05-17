const express = require('express')
const router = express.Router()
const Users = require('../models/Users')

router.post('/', (req, res) => {
    const users = new Users({
        login: req.body.login,
        email: req.body.email,
        password: req.body.password
    })
    if (req.body.passwordconfirm == req.body.password) {
        users
        .save({})
        .then(users => res.status(200).json({
            login: users.login,
            email: users.email,
            message: 'Collection saved !'
        }))
        .catch(error => res.status(400).json({
            message: 'Failed to save collection.',
            error: error
        }))
    }
    else {
        res.status(400).json({message: 'Passwords don\'t match'})
    }
})

module.exports = router