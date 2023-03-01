const productModel = require("../Model/productModel")
const AWS = require("../Controller/aws")
const { isValidString, isValidPrice } = require("../Middleware/validators")

const createProduct = async function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    try {
        let userData = req.body
        let { productName, price } = userData

        if (!productName) return res.status(400).send({ status: false, message: "product name required" })

        if (!isValidString(productName)) return res.status(400).send({ status: false, message: "Invalid product name" })

        let duplicateName = await productModel.findOne({ productName: productName })
        if (duplicateName) return res.status(400).send({ status: false, message: "product name already exist" })

        if (!price) return res.status(400).send({ status: false, message: "price required" })

        if (!isValidPrice(price)) return res.status(400).send({ status: false, message: "Invalid price" })

        let image = req.files
        if (image == undefined || image.length == 0) return res.status(400).send({ status: false, message: "Please provide a product image" })

        if (image.length == 1) {
            if (image[0].mimetype.split('/')[0] != 'image') {
                return res.status(400).send({ status: false, message: "Provide a jpeg or png file" })
            }
            let imageLink = await AWS.uploadFile(image[0])
            userData.img = imageLink
        }
        const createProduct = await productModel.create(userData)
        return res.status(201).send({ status: true, message: "Success", data: createProduct });

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

const getProducts = async function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    try {
        let getData = await productModel.find()
        return res.status(200).send({ status: true, Data: getData })
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

module.exports = { createProduct, getProducts }