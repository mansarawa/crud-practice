import Note from "../models/addnote.js";

async function myNoteController(req, res) {
    const { userid } = req.body;
    try {
        const myNotes = await Note.find({ userid: userid });
        console.log(myNotes); // Log notes before sending response
        return res.json({ message: "Your notes", notes: myNotes,success:true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" ,success:false});
    }
}

export default myNoteController;
