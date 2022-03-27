const express=require('express');
const app=express();
const mongoose=require('mongoose');
app.use(express.json())
const db=require('./db')
var Users=require('./model');
var login=require('./login');
var User=require('./User');
app.use(User);
app.use(login);
var nodeMailer=require('nodemailer');

app.get('/sendmail',(req,res)=>{
    const transport=nodeMailer.createTransport({service:'gmail',
    auth:{user:'arbaazuniquegzp@gmail.com',pass:''}})
    const mailOption= {from:'arbaazuniquegzp@gmail.com',to:'sharidansari111@gmail.com',
    subject:'node mail',text:'hello sharid welcome to bhopal'};
    transport.sendMail(mailOption,(err,info)=>{
        if(err){console.log(err)}else{res.json({message:"mail sent succesfuly"})}
    })
})
app.listen(5000,()=>{
    console.log('server started at port 5000')
})