import mongoose, { Schema } from 'mongoose'

const imageSchema=new Schema({
    url:String,
    userid:String
})

const image=mongoose.model('image',imageSchema)

export default image