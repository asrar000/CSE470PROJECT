const mongoose = require("mongoose")
const ResSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:String,
    contact:String,
    pic:{
        type:String,
        default:"Res.jpg"
    }
        

    
})

 const Resturant=mongoose.model("Resturant",ResSchema)
 module.exports=Resturant
