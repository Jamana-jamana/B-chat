import jwt from "jsonwebtoken"

export const  generateToken = (userId, res)=>{
    const{JWT_SECRET, NODE_ENV} = process.env;
    if(!JWT_SECRET){
        throw new error('JWT_SECRET is not configured')
    }



    const tocken = jwt.sign({userId}, JWT_SECRET,{
        expiresIn:"7d",
    });
    res.cookie("jwt", tocken,{
        maxAge: 7*24*60*60*1000, //ms
        httponly : true,
        sameSite: "strict",
        secure: NODE_ENV === "development" ? false : true,
    });

    return tocken;

};