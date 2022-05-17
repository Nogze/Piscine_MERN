const jwt = require('jsonwebtoken')

const validateToken = (req, res, next) => {
    const authHeader = req.headers['token'];
    const token = authHeader && authHeader.split(" ")[1];
    console.log(token)
    jwt.verify(token, process.env.SECRET_TOKEN, (error, decoded) => {
        if (error) return res.sendStatus(403)
        req.tokenData = decoded
        next()
    })
}

module.exports = validateToken
