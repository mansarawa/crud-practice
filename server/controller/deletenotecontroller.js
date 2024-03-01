import note from "../models/addnote.js";
async function deletenotecontroller(req,res){
    const {_id}=req.body;
    const delnote=await note.findByIdAndDelete({_id:_id})
    return res.json({message:"deleted",success:true})
}
export default deletenotecontroller