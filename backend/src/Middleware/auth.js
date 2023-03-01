const jwt = require("jsonwebtoken")

const authentication = async function (req, res, next) {
    try {
        const token = req.headers["authorization"]
        if (typeof token == "undefined" || typeof token == "null") {
            return res.status(400).send({ status: false, message: "Provide token" })
        }
        let Token = token.split(" ").pop()

        jwt.verify(Token, "the-secret-key", (error, decoded) => {
            if (error) {
                return res.status(401).send({ status: false, message: error.message })
            } else {
                req.userId = decoded.userId
                next()
            }
        })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

module.exports.authentication = authentication