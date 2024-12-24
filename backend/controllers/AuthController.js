import jwt from "jsonwebtoken";

export const LoginUser = async(req,res)=>{
    const{username,password}=req.body;
    try {
        if(username !== "Admin")
        {
            res.status(400).send("Incorrect User name");
        }
        if(password !== "Admin123")
        {
            res.status(400).send("Incorrect password");
        }
        const token =jwt.sign({username},process.env.JWT_SECRET,{expiresIn:'1h'});
        console.log("lodded in");
        res.status(201).json({token});
    } catch (error) {
        console.log(error);
        res.status(500).send("Unable to login");
    }
}

export const SiguUpUser = async(req,res)=>{
    
}

export const LoginBackUser= async(req,res)=>{
    try {
    console.log("req: ",req.headers);
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    const isExpired = Date.now()>=decoded.exp * 1000;
    if(isExpired)
    {
        res.status(401).send("Token is expired");
    }
    res.status(200).json({username:decoded.username});
}
    catch (error) {
        console.log(error);
        res.status(500).send("Unable to login back");
    }
}

