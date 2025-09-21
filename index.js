console.log("welcome databse");
//class 79
//database keno use korbo?database ta use kora hoa jate datagulake store rakhte.jate onek bochor por o jate data gula ami pai
//database 2 dhoroner.realational & non-relational. Mongodb holo non-relational. 

//CAhW3mCSDKPvgk0X
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const registrationController = require("./controllers/registrationController")

mongoose.connect('mongodb+srv://todo:CAhW3mCSDKPvgk0X@cluster0.loffskh.mongodb.net/todolist?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
  console.log("Mongodb connected")
});

app.post("/registration",registrationController)

app.listen(8000,()=>{
  console.log("server is running")
});
