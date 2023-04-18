const morgan=require('morgan')
const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv').config()
const mongoose=require('mongoose')
const authController = require('./controllers/authController');
const productController = require('./controllers/productController');
const uploadController = require('./controllers/uploadController');
const app=express()


mongoose.connect(process.env.MONGO_URL)


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan("common"))
app.use('/auth', authController)
app.use('/product',productController)
app.use('/upload',uploadController)
app.listen(process.env.PORT,()=> console.log('Server has been connected sucessfully'))

//asdasdas
///asdas