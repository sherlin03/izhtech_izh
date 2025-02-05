import { PostModel } from "./post";
export type ContactModel ={
    name:string;
    email:string;
    subject:string;
    message:string;
    mobileNumber:number;
    companyName:string;
    service:string;
    Post:PostModel[];
};