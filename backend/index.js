const express = require("express");
const app = express();
const cookieparser = require('cookie-parser')

require('dotenv').config({path:"./.env"})

app.use(express.json())
app.use(cookieparser())
require('./connection')


const userRoutes = require('./Routes/user');
app.use("/api/auth",userRoutes);


app.listen(process.env.PORT,()=>{
    console.log("Successfully running on port",process.env.PORT)
})

//projectas7447
//ctNy2qIfH8XfRTt5
//mongodb+srv://projectas7447:ctNy2qIfH8XfRTt5@cluster0.72ynimg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0