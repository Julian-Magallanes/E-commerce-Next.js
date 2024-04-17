import { ICredential } from "@/app/types";

function ValidateLogin(userData: ICredential):ICredential{
    const errors: ICredential = {email: '', password: ''}
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/;
    if(!userData.email){
        errors.email = "Please enter the user's email";
    }else if(!emailRegex.test(userData.email)){
        errors.email = "Please enter a valid email format, for example: example@example.com";
    }else if (!userData.password){
        errors.password = "Please enter a password";
    }else if(!passwordRegex.test(userData.password)){
        errors.password = "Password must contain at least one uppercase letter and one number";
    }
    
    return errors;
}
export {ValidateLogin}