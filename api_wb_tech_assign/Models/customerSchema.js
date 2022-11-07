const mongoose=require("mongoose")
const customerModel=new mongoose.Schema({
    Customer_id:{
        type:String,
        require:true
    },
    Customer_name:{
        type:String,
        require:true,
        unique:true
    },
    Email:{
        type:String,
        require:true,
        unique:true
    },
    Balance:{
        type:String,
        require:true
    }
})
const customerSchema=mongoose.model("customer",customerModel)
module.exports=customerSchema