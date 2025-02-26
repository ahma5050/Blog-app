
import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";

const signup=async(req, res, next)=>{
const {username, email, password}=req.body;
console.log(username)
console.log(email)
console.log(password)
if(!username || !email || !password || username==="" || email==="" || password==="")
   return next(errorHandler(400, "All failled reqauired"))
const hashedpassword= bcryptjs.hashSync(password, 10)
const newUser=new User({username, email, password:hashedpassword,});

try{

await newUser.save();
res.status(200).json("signup is successfull!")

}catch(err){
      console.log(err)
      next(err);
}
}
export default signup;