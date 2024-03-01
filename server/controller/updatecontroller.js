import note from "../models/addnote.js";

async function updateController(req, res) {
    const { heading, desc, _id } = req.body;
    try {
        const updateNote = await note.findByIdAndUpdate(_id, { heading, desc }, { new: true });
        if (updateNote) {
            console.log("updated");
            return res.status(200).json({ message: "Note updated successfully", note: updateNote });
        } else {
            return res.status(404).json({ message: "Note not found" });
        }
    } catch (error) {
        console.error("Error updating note:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default updateController;
