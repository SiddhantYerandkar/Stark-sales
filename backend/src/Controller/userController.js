const userModel = require('../Model/userModel')
const { isValidMobile, isValidEmail, isValidString, isValidPassword } = require("../Middleware/validators")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs')

const createUser = async function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    try {
        let userData = req.body
        let { email, username, phone, password } = userData

        if (Object.keys(userData).length === 0) {
            return res.status(400).send({ status: false, message: "Body should not be Empty" })
        }

        if (!email) {
            return res.status(400).send({ status: false, message: "email must reqired !" })
        }
        if (!isValidEmail(email)) {
            return res.status(400).send({ status: false, message: "invalid email !" })
        }

        if (!username) {
            return res.status(400).send({ status: false, message: "username must reqired !" })
        }
        if (!isValidString(username)) {
            return res.status(400).send({ status: false, message: "invalid username!" })
        }

        if (!phone) {
            return res.status(400).send({ status: false, message: "phone must reqired !" })
        }
        if (!isValidMobile(phone)) {
            return res.status(400).send({ status: false, message: "invalid phone!" })
        }

        if (!password) {
            return res.status(400).send({ status: false, message: "password must reqired !" })
        }
        if (!isValidPassword(password)) {
            return res.status(400).send({ status: false, message: "invalid password!" })
        }

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
        userData.password = hashPassword

        const createUser = await userModel.create(userData)

        return res.status(201).send({ status: true, message: 'Success', data: createUser })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

const login = async function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    try {
        let data = req.body

        if (Object.keys(req.body).length == 0) {
            return res.status(400).send({ status: false, message: "email and password is required" })
        }

        let { email, password } = data

        if (!email) {
            return res.status(400).send({ status: false, message: "email must reqired !" })
        }
        if (!password) {
            return res.status(400).send({ status: false, message: "password must reqired !" })
        }

        let userData = await userModel.findOne({ email: email })
        if (!userData) return res.status(404).send({ status: false, message: "Email not found" })

        let hashPassword = userData.password

        let result = await bcrypt.compare(password, hashPassword)
        if (!result) return res.status(400).send({ status: false, message: "Entered password is incorrect" })

        let token = jwt.sign(

            { userId: userData._id.toString() },
            "the-secret-key",
            { expiresIn: '15h' }
        )

        res.setHeader('Authorization', token)

        return res.status(200).send({ status: true, token: token });

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}
module.exports = { createUser, login }