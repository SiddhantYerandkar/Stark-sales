const express = require('express');

const router = express.Router()

const userController = require('../Controller/userController')
const productController = require('../Controller/productController')

router.post('/createuser', userController.createUser)

router.post('/login', userController.login)

router.post('/createProduct', productController.createProduct)

router.get('/getProducts', productController.getProducts)

module.exports = router