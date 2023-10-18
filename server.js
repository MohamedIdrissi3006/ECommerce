const express = require('express')



const app = express();


app.get('/',(req,res)=>{
    res.send('Api running ')
})

app.get('/api/test',(req,res)=>{
    res.send('test is running')
})


app.listen(5000,console.log("Server running on port 5000"))