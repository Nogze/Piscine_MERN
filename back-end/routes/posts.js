const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')

router.get('/posts', auth, (req, res) => {
    res.send("slt")
})

module.exports = router