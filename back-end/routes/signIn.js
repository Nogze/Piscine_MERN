const express = require('express')
const router = express.Router()
const Users = require('../models/Users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')

router.post('/', (req, res) => {
    const users = Users
    users
    .findOne({login: req.body.login})
    .then(user => bcrypt.compare(req.body.password, user.password, (error, match) => {
        if (match) {
            const payload = {user: user._id}
            const token = jwt.sign(payload, process.env.SECRET_TOKEN, {
                expiresIn: '30d'
            })
            console.log(token)
            res.status(200).json({token: `Bearer ${token}`})
        }
        else {
            res.status(400).json({message: 'Incorrect password.'})
        }
    }))
    .catch(() => res.json({message: 'Failed to log in.'}))
})

module.exports = router