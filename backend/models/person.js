const mongoose=require("mongoose")
const Schema=mongoose.Schema

const Person=new Schema({
    firstname:{
      type:String,
      required:true
    },
    lastname:{
      type:String,
      required:true
    },
    emailaddress:{
      type:String,
      requred:true
    },
    phonenumber:{
      type:String,
      required:true
    },
    message:{
      type:String,
      required:true
    },

},{
  timestamps:true
})

module.exports=mongoose.model("Person",Person)