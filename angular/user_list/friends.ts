import { Friend } from  "./friend_list"

let friendList:Friend[] = [
    new Friend("Sumit",26,"mysite@ourearth.com",false),
    new Friend("Tom",22,"mysite@ourearth.com",false),
    new Friend("Ron",23,"mysite@you.me.net",false),
    new Friend("Bob",24,"btre@outlook.com",false),
    new Friend("Max",25,"tretw",false)
];
function resetData(){
    let friendList:Friend[] = [
        new Friend("Sumit",26,"req",false),
        new Friend("Tom",22,"fad",false),
        new Friend("Ron",23,"bgdetr",false),
        new Friend("Bob",24,"btre",false),
        new Friend("Max",25,"tretw",false)
    ];
}
function compareAge(a,b){
    if (a===b) return 0;
    return (a['age'] > b['age']) ? 1 : -1;
}
function compareFn(a,b){
    if (a===b) return 0;
    return (a['name'] > b['name']) ? 1 : -1;
}
function compareFnDesc(a,b){
    if (a===b) return 0;
    return (a['name'] > b['name']) ? -1 : 1;
}
function ValidateEmail(friend) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(friend))
  {
    return (true)
  }
    //alert("You have entered an invalid email address!")
    return (false)
}

console.log("\nUnsorted List:");
for (let friend of friendList) {
    console.log(friend.name + " " + friend.age  + " " + friend.email + " " + friend.bestfriend); // 1, "string", false
}
console.log("\nSorted List by age:");
for (let friend of friendList.sort(compareAge)) {
    console.log(friend.name + " " + friend.age  + " " + friend.email + " " + friend.bestfriend); // 1, "string", false
}
console.log("\nSorted List by First Name(asc):");
for (let friend of friendList.sort(compareFn)) {
    console.log(friend.name + " " + friend.age  + " " + friend.email + " " + friend.bestfriend); // 1, "string", false
}
console.log("\nSorted List by First Name(desc):");
for (let friend of friendList.sort(compareFnDesc)) {
    console.log(friend.name + " " + friend.age  + " " + friend.email + " " + friend.bestfriend); // 1, "string", false
}
console.log("\nValid email:");
for (let friend of friendList) {
    if(!ValidateEmail(friend.email)){
        console.log(friend.name + " " + friend.age  + " " + friend.email + "(not valid) " + friend.bestfriend);
    }else{
        console.log(friend.name + " " + friend.age  + " " + friend.email + "(valid) " + friend.bestfriend);
    }
    //console.log(friend.name + " " + friend.age  + " " + friend.email + " " + friend.bestfriend); // 1, "string", false
}
console.log("\nEven or Odd age:");
for (let friend of friendList.sort(compareFnDesc)) {
    if (friend.age % 2==0) { 
        console.log(friend.name + " " + friend.age + "(Even)" + " " + friend.email + " " + friend.bestfriend); // 1, "string", false
     } else {
        console.log(friend.name + " " + friend.age + "(Odd)" + " " + friend.email + " " + friend.bestfriend); // 1, "string", false
     }
}
console.log("\nChanging Bob's name to Greg:");
for (let friend of friendList.sort(compareFnDesc)) {
    if(friend.name === 'Bob'){
        friend.name = "Greg";
        friend.bestfriend = true;
    }
    console.log(friend.name + " " + friend.age  + " " + friend.email + " " + friend.bestfriend); // 1, "string", false
}