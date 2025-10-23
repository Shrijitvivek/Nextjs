import mongoose from "mongoose";

const dburi = process.env.MONGODB_URI as string;

if(!dburi)
{
    console.log("uri is undefined")
}

const dbcon = async()=>{
    try{
        await mongoose.connect(dburi);
        console.log("database connected")
    }
    catch(err)
    {
        console.log("error while connecting database",err)
    }
}

export default dbcon