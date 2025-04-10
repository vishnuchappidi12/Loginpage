let express=require("express")

const {getall,reg,login}=require("../controls/control")
let rt=new express.Router()
rt.get("/:token",getall)
rt.post("/reg",reg)
rt.post("/login",login)
module.exports=rt
