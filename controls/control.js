let um=require("../models/model")
let bcrypt=require("bcrypt")
let jwt=require("jsonwebtoken")
let reg=async (req,res)=>{
    try{
        let obj=await um.findById(req.body._id)
        if(obj){
            res.send("acc there")
        }
        else{
            let pwdhash=await bcrypt.hash(req.body.pwd,8)
            let data=new um({...req.body,"pwd":pwdhash})
            await data.save()
            res.send("acc is created")
        }
    }
    catch(err){
        res.send("error in reg")
    }
    }
let login=async(req,res)=>{
    try{
        let obj=await um.findById(req.body._id)
        if(obj){
            let f=await bcrypt.compare(req.body.pwd,obj.pwd)
            if(f){
                res.json({"token":jwt.sign({"_id":obj._id},"abcd"),"name":obj.name})
            }
            else{
                res.send("check pwd")
            }
        }
        else{
            res.send("check mail")
        }
    }
    catch(err){
        res.send("error in login")
    }
}
let getall=async(req,res)=>{
    try{
        jwt.verify(req.params.token,"abcd")
        let data=await um.find({},{"pwd":0})
        res.json(data)
    }
    catch(err){
        res.send("plz login")
    }
}
module.exports= {reg,login,getall}