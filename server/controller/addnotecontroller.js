import note from "../models/addnote.js";

async function addnotecontroller(req,res){
    const {heading,desc}=req.body;
    const newNote= note.create({
        heading:heading,
        desc:desc
    })
     await newNote.save

     return res.json({message:"send successfulle",note:newNote})
}
export default addnotecontroller;