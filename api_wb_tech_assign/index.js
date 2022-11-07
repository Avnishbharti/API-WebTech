const express=require("express")
const mongoose=require("mongoose")
const port=3000;
const ejs=require("ejs")
const inventorySchema=require("./Models/inventorySchema")
const customerSchema=require("./Models/customerSchema")
const orderSchema=require("./Models/orderSchema")
const app=express()
app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({extended:false}))

mongoose.connect("mongodb://localhost/API_WEBtech",(err)=>{
    if(!err){
        console.log("Db connected")
    }
    else{
        console.log(err)
    }
})
app.get("/inventory",(req,res)=>{
    inventorySchema.find().then((user)=>{
        res.render("inventory",{user})
    })
})
app.post("/createInventory",(req,res)=>{
    inventorySchema.create({
        Product_id:req.body.Product_id,
        Product_type:req.body.Product_type,
        Product_name:req.body.Product_name,
        Product_price:req.body.Product_price,
        Available_quantity:req.body.AvailableQuantity
    }).then((data)=>{
        res.status(200).send("data posted successfully")
    }).catch((err)=>{
        console.log(err)
    })
})
app.post("/customer",(req,res)=>{
    console.log(req.body)
    customerSchema.create({
        Customer_id:req.body.Customer_id,
        Customer_name:req.body.Customer_name,
        Email:req.body.Email,
        Balance:req.body.Balance
    }).then((data)=>{
        console.log(data)
        res.status(200).send("data posted successfully")
    }).catch((err)=>{
        console.log(err)
    })
})
app.get("/customer",(req,res)=>{
    customerSchema.find().then((customer)=>{
        res.render("customer",{customer})
        console.log(customer)
    })
})
app.post("/order",(req,res)=>{
  inventorySchema.find({}).then((data)=>{
    console.log(data[0].Inventory_id)
    if(data.length>0){
        orderSchema.create({
            Customer_id:req.body.Customer_id,
            Product_id:req.body.Product_id,
            Product_name:req.body.Product_name,
            Quantity:req.body.Quantity
        }).then((data)=>{
            res.status(200).send("Order Posted")
        }).catch((err)=>{
            console.log(err)
        })
    }
    else{
        res.status(400).send("Out of stock")
    }
  })
})
app.get("/order",(req,res)=>{
    orderSchema.find().then((order)=>{
        res.render("order",{order})
        console.log(order)
    })
})
app.get("/inventory/electonics",(req,res)=>{
    inventorySchema.find({Product_type:"Electronics"}).then((Electronics)=>{
        console.log(Electronics)
        res.status(200).render("electronics",{Electronics})
    }).catch((err)=>{
        console.log(err)
    })
})
app.get("/inventory/furniture",(req,res)=>{
    inventorySchema.find({Product_type:"Furniture"}).then((furn)=>{
        console.log(furn)
        res.status(200).render("furniture",{furn})
    }).catch((err)=>{
        console.log(err)
    })
})
app.listen(port,(err)=>{
    if(!err){
        console.log(`Port connected on ${port}`)
    }
    else{
        
        console.log(err)
    }
})