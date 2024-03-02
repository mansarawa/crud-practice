import image from "../models/image.js";

export const getimagecontroller=async(req,res)=>{
    const {userid}=req.body;

    const imgFind=await image.findOne({userid:userid})

    if(imgFind)
    {
        return res.json({message:"find successfull",success:true,data:imgFind})
    }
    else{
        return res.json({message:"find unsuccessfull",success:false})
    }
}

export default getimagecontroller