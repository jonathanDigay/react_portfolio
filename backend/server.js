const Express=require("express")
const App=Express()
const Port=process.env.PORT || 3001

App.use(Express.json())


App.listen(Port,()=>{
console.log("app i Listening On port " + Port)
})
