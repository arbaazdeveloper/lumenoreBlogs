const mongoose=require('mongoose');
const connection=mongoose.connect('mongodb+srv://arbaazuniquecluster:dvI3CMjPBCVFuLg5@cluster0.ufmww.mongodb.net/test').then(()=>{
    console.log('connection created succesfully')
}).catch((err)=>{console.log(err)})

module.exports=connection;