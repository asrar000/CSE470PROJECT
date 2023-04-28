const resturantController=require("express").Router()
const {verifyToken, verifyTokenAdmin} = require('../middlewares/verifyToken')
const Product = require("../models/Product")
const Resturant =require( "../models/resturant")

const getall=async (req,res) =>{
    try {
        const resturant = await Resturant.find()
        return res.status(200).json(resturant)
    } catch (error) {
        console.error(error)
    }
}  

const get=async (req,res) =>{
    try {
        const {id} = req.params
        const resturant = await Resturant.findById(id)
        return res.status(200).json(resturant)
    } catch (error) {
        console.error(error)
    }
}  



const create=async (req,res) =>{
    try {
        const {name,location,contact,pic}=req.body
        const newResturant=await Resturant.create({name,location,contact,pic})
        return res.status(201).json({created:newResturant})
    } catch (error) {
        console.error(error)
    }
}  

const findFood=async(req,res)=>{
    try {
        const products = await Product.find()
        return res.status(200).json(products)
    } catch (error) {
        console.error(error)
    }
}



resturantController.get("/getresturant",getall)
resturantController.get("/getresturant/:id",verifyToken,get)
resturantController.get("/:id",verifyToken,findFood)
resturantController.post("/create",verifyTokenAdmin,create)

module.exports=resturantController
