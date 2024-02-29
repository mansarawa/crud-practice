import mongoose, { Schema } from "mongoose";

const noteSchema=new Schema({
    heading:String,
    desc:String
})

const note=mongoose.model('notes',noteSchema)

export default note;