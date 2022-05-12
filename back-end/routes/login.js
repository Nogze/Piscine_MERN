const express = require('express')
const router = express.Router()
const Users = require('../models/Users')
const bcrypt = require('bcrypt')

router.post('/', (req, res) => {
    const users = Users
    users
    .findOne({login: req.body.login})
    .then(user => bcrypt.compare(req.body.password, user.password, (error, match) => {
        if (match) {
            res.status(200).json({message: 'Welcome ' + user.login + " !"})
        }
        else {
            res.status(400).json({message: 'Incorrect password.'})
        }
    }))
    .catch(() => res.json({message: 'Failed to log in.'}))
})

module.exports = router