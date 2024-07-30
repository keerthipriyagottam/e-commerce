const express=require('express');
const mongoose=require('mongoose');
const dotenv = require('dotenv');
const productRouter=require('./routes/productRoutes');
// created the server
const app=express();
dotenv.config();

const port = process.env.PORT || 8080;

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connection successful"))
    .catch(err => console.error("MongoDB connection error:", err));



// health end point
app.get('/health',async(req,res)=>{
    res.status(200).send("The App is running")
})

app.use(express.json());

app.use('/product',productRouter);






app.listen(port, ()=>{
 console.log(`server running at ${port} `)
})