import User from "../models/User.js";

async function signupcontroller(req,res){
    const {name,email,password}=req.body;
    try {
        const existinguser=await User.findOne({email:email})
        if(existinguser)
        {
            return res.json({message:'already signup',success:false})
        }
    
        const newUser= await User.create({
        name:name,
        email:email,
        password:password
        })
   
         await newUser.save
        return res.json({message:"created successfully",success:true,user:newUser})
    
} catch (error) {
        console.log(error)
}
   
}


export default signupcontroller