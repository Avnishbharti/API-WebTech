const mongoose=require("mongoose")
const inventoryModel=new mongoose.Schema({
    Product_id:{
        type:String,
        require:true
    },
    Product_type:{
        type:String,
        require:true
    },
    Product_name:{
        type:String,
        require:true
    },
    Product_price:{
        type:Number,
        require:true
    },
    Available_quantity:{
        type:Number,
        require:true
    }
})
const inventorySchema=mongoose.model("inventory",inventoryModel)
module.exports=inventorySchema