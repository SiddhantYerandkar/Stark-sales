const express = require('express')
const route = require('./routes/route')
const mongoose = require('mongoose')
const cors = require("cors");
const multer = require("multer")

const app = express()

app.use(express.json())
app.use(multer().any())
app.use(cors());

mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://InternetThug:Siddhant123@cluster0.t0cdfcj.mongodb.net/starksales", { useNewUrlParser: true })

    .then(() => console.log("MongoDb Connected"))
    .catch((error) => console.log(error))

app.use('/', route)

app.use((req, res) => {
    res.status(404).send({ status: false, message: `Page Not Found , Given URL ${req.url} is incorrect for this application.` })
})

app.listen(3000, () => console.log("connected to Port 3000"))