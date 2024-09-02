import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res)=>{
    const token = jwt.sign({userId},"wrnh1pAhggCsu+HgBtWLMvBd2FxcNxjms1f4QZikzY0=",{
        expiresIn:"15d"
    })

    res.cookie("jwt",token,{
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly:true,
        sameSite:"strict",
        secure: "development" !== "development",
    })
}

export default generateTokenAndSetCookie;