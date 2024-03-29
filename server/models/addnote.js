import mongoose, { Schema } from "mongoose";

const noteSchema=new Schema({
    userid:String,
    heading:String,
    desc:String,
    createdAt: {
        type: Date,
        default: Date.now
    }
    
})

const note=mongoose.model('notes',noteSchema)

export default note;