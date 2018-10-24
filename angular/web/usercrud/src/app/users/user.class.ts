export class User{
    Id: number;
    UserNAme: string;
    Password: string;
    FirstName: string;
    LastName: string;
    Phone: string;
    Email: string;
    IsReviewer: boolean;
    IsAdmin: boolean;

   constructor(){
       this.Id=0;
       this.IsReviewer=false;
       this.IsAdmin=false;
   } 

}