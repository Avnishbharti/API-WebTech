const mongoose=require("mongoose")
const orderModel=new mongoose.Schema({
    Customer_id:{
        type:String,
        require:true
    },
    Product_id:{
        type:String,
        require:true
    },
    Product_name:{
        type:String,
        require:true
    },
    Quantity:{
        type:String,
        require:true
    }
})
const orderSchema=mongoose.model("order",orderModel)
module.exports=orderSchema