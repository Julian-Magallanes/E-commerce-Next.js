import { IRegister} from "@/app/types";

export default function ValidateRegister (userRegister:IRegister):IRegister{
    const errors:IRegister = {email: "",password: "",passwordValidate: "",name: "",address: "",phone: ""}
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/;
    const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+\s[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phoneRegex = /^\+?\d{1,4}?[-.\s]?\(?[0-9]*\)?[-.\s]?\d{1,}$/;


    if(!userRegister.email){
        errors.email = "Please enter your email";
    }else if(!emailRegex.test(userRegister.email)){
        errors.email = "Please enter a valid email format, for example: example@example.com"
    }
    else if(!userRegister.password){
        errors.password = "Please enter a password";
    }else if(!passwordRegex.test(userRegister.password)){
        errors.password = "Password must contain at least one uppercase letter and one number";
    }else if(userRegister.password !== userRegister.passwordValidate){
        errors.passwordValidate = "The entered password does not match the previous password";
    }else if(!userRegister.name){
        errors.name = "Please enter your full name as it appears on your ID";
    }else if(!nameRegex.test(userRegister.name)){
        errors.name = "The name cannot contain numbers and must contain first name + last name"
    }else if(!userRegister.address){
        errors.address = "Please enter an address";
    }else if(!userRegister.phone){
        errors.phone = "Please enter a phone number";
    }else if(!phoneRegex.test(userRegister.phone)){
        errors.phone = "Please enter a valid phone number with 10 digits, for example: 1234567890"
    }
    return errors;
}

export {ValidateRegister}