const express=require('express');
const mongoose=require('mongoose');
// created the server
const app=express();

// health end point
app.get('/health',async(req,res)=>{
    res.status(200).send("The App is running")
})

const port=8080;

app.listen(port, ()=>{
 console.log(`server running at ${port} `)
})