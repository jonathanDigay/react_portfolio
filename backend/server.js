const Express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const App=Express()
require("dotenv").config()
const Port=process.env.PORT || 3001


// midddleware
App.use(Express.json())
App.use(cors())

// Routes
const Person=require("./routes/person.js")
App.use("/person", Person)


// Connection to mongodb
const uri=process.env.DB_URI
mongoose.connect(uri,{ 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true},
  (err)=>err? console.log(err):console.log("connected")
  )


App.listen(Port,()=>{
console.log("app i Listening On port " + Port )
})
