import mongoose from 'mongoose';

export default async function connectDB(){
    await mongoose.connect(process.env.ATLAS_URI)
    console.log("Database connected successfully")
}
