import mongoose from "mongoose";

export const connectDB =async () =>{
  await mongoose.connect('mongodb+srv://hemayerra015:fjtBdP4iGo9byL6i@cluster0.wnjz2ml.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}