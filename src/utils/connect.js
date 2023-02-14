import mongoose from 'mongoose';

export const connectDb = async(req,res)=>{
 
    await mongoose.connect("mongodb+srv://owndb:VInxk9KEBPe3RMcU@cluster0.ncpvelk.mongodb.net/todo")
    .then(()=>console.log("Connection Open"))
    .catch((err)=>console.log("Error"));
    
}



// localhost:27017/next-todo

// admin:password@localhost:27018/todo