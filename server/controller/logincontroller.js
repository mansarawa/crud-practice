import User from "../models/User.js";

async function logincontroller(req,res){
    const {email,password}=req.body;
    const checkuser=await User.findOne({email:email})
   
    if(checkuser)
    {
        if(password=== checkuser.password)
        {
            return res.json({message:"login successfully",success:true,user:checkuser})
        }
    }
    else
    {
        return res.json({message:"please signup",success:false})
    }
}
export default logincontroller