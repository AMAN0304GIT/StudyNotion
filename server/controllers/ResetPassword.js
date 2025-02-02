const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
// resetPasswordToken
exports.resetPasswordToken = async (req,res) =>{
    try{
        // get email from request body
        const email = req.body.email;
        // check user for this email is present , email validation
        const user = await User.findOne({email: email});
        if(!user){
            return res.json({
                success:false,
                message:"ypur Email is not registered with us",
            });
        }
        // generate token 
        const token = crypto.randomBytes(20).toString("hex");
        // update user by adding token and expiration time
        const updatedDetails = await User.findOneAndUpdate({email:email},{token:token, resetPasswordExpires: Date.now() + 5*60*1000,},{new:true}); 
        // create url
        const url = `http://localhost:3000/update-password/${token}`
        // send mail containing the url
        await mailSender(email, "Password Reset Link", `Password Reset link: ${url}`);
        
        // return response
        return res.json({
            success:true,
            message:'Email sent successfully',
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Something went wrong while sending reset password mail ",
        });
    }

}

// resetPassword --> updates password in the DB
exports.resetPassword = async (req, res) =>{
    try{
        // data fetch
        const {password, confirmPassword, token} = req.body;
        // validation
        if(password !== confirmPassword){
            return res.json({
                success:false,
                message:"Confirm Password you entered is not matching, please re-enter the password",
            });
        }
        // get user details from db  using token
        const userDetails = await User.findOne({token:token});
        // if no emtry --> invalid token
        if(!userDetails){
            return res.json({
                success:false,
                message:"Token is Invalid",
            });
        }

        // check token expiry time
        if(userDetails.resetPasswordExpires < Date.now() ){
            return res.json({
                success:false,
                message:"Token is expired , Please regenerate token ",
            });
        }
        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        // password update
        await User.findOneAndUpdate(
            {token:token},
            {password:hashedPassword},
            {new:true},
        );
        // return response
        return res.status(200).json({
            success:true,
            message:"password reset is successfully done ",
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Failed to Reset password , please try again later",
        });
    }
}