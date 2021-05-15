const express=require("express")
const router=express.Router()
const models =require("../models/person.js")


router.post("/send",(req,res)=>{
   const send =new models({
       firstname:req.body.firstname,
       lastname:req.body.lastname,
       emailaddress:req.body.emailaddress,
       phonenumber:req.body.phonenumber,
       message:req.body.message,
      })
      send.save()
      .then(data=>res.json(data))
      .catch(err=>res.json(err))
    })
module.exports=router