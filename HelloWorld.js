const {req,res}=require("express");
const express=require("express");
const obj=express();

obj.listen(3000,(req,res)=>{
    console.log("Harshal Server Started....");
})

obj.get('/',(req,res)=>{
    res.send("Inside Harshal Server....");
})

obj.get('/Hello',(req,res)=>{
    res.send("Hello World")
})