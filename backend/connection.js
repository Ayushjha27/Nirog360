const mongoose = require('mongoose')



mongoose.connect('mongodb+srv://projectas7447:ctNy2qIfH8XfRTt5@cluster0.72ynimg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

.then(res=>{
    
    console.log("Database connected successfully")
    
}).catch(err=>{
    
    console.log(err)
})