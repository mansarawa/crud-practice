import note from "../models/addnote.js";

async function addnotecontroller(req,res){
    const {heading,desc,userid}=req.body;
    const newNote= await note.create({
        userid:userid,
        heading:heading,
        desc:desc
    })
     await newNote.save

     return res.json({message:"send successfulle",note:newNote})
}
export default addnotecontroller;