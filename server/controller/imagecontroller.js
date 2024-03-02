import Image from "../models/image.js";

export const imagecontroller = async (req, res) => {
    const { url, userid } = req.body;
    try {
        let existingUser = await Image.findOne({ userid:userid });

        if (!existingUser) {
            const newPhoto = new Image({
                url: url,
                userid: userid
            });
            await newPhoto.save();
            return res.json({ message: "Sent successfully", success: true });
        } 
        else {
            existingUser.url = url; // Update the URL of the existing image
            await existingUser.save();
            return res.json({ message: "Updated successfully", success: true });
        }
    } catch (error) {
        console.error("Error in imagecontroller:", error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
};
