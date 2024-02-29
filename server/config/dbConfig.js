import mongoose from "mongoose";

async function ConnectToDb(){
    try {
        await mongoose.connect('mongodb+srv://mansarawa:mansa%407773@cluster0.0rqhhtz.mongodb.net/crudnotes')
        console.log("connected successfully");
    } catch (error) {
        console.log(error)
    }
}

export default ConnectToDb