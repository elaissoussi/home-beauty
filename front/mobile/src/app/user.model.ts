export class  User{
    firstname: string;
    lastname: string;
   
    email: string;
    password: string;
  
    mobile: string;
    type: UserType;
}
export enum UserType{
    customer=1,
    esthetician=2
}