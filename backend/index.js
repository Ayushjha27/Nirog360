const express = require("express");
const app = express();

app.use(express.json())
require('./connection')
app.get('/',(req,res)=>{
    res.send({message:"Successfully Running"})
})

app.listen(4000,()=>{
    console.log("Successfully running on port 4000")
})

//projectas7447
//ctNy2qIfH8XfRTt5
//mongodb+srv://projectas7447:ctNy2qIfH8XfRTt5@cluster0.72ynimg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0