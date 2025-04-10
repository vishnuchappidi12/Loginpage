let mongoose=require("mongoose")
let usch=new mongoose.Schema({
    "_id":String,
    "name":String,
    "pwd":String
})
let um=mongoose.model("users",usch)
module.exports=um