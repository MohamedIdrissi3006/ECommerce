const express = require('express')
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require('./routes/userRoutes')
dotenv.config();
connectDB();

const app = express();

app.use(express.json()); 
app.get('/',(req,res)=>{
    res.send('Api running ')
})
app.use("/api/user", userRoutes);
app.get('/api/test',(req,res)=>{
    res.send('test is running')
})

app.post('/api/user/res', (req, res) => {
    console.log(req.body); // Log the request body to the console

    // Rest of your code
  });
app.listen(5000,console.log("Server running on port 5000"))