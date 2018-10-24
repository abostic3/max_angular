export class Friend 
{
    public _name:string;
    public _age:number;
    public _email:string;
    public _bestfriend: boolean;
_
    constructor(name:string, age:number,email:string,bestfriend:boolean){
        this._name = name;
        this._age = age;
        this._email = email;
        this._bestfriend = bestfriend;
    }
    //getters
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    get email() {
        return this._email;
    }
    get bestfriend() {
        return this._bestfriend;
    }
    //setters
    set name(aName) {
        this._name=aName;
    }
    set age(aAge) {
        this._age=aAge;
    }
    set email(aEmail: string) {
        this._email=aEmail;
    }
    set bestfriend(aName: boolean) {
        this._bestfriend=aName;
    }

} 