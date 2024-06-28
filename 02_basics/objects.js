//BASICS:- 

//2 Ways of declaration.- Constructor, Object Literal

//Singleton - Constructor se bnega to singleton bnega no instances other.


//Constructor = Object.create
//Object Literals.

const JsUser ={
    name : "Zohaib", //Key Val Pair
    "full Name": "Zohaib Akhtar",
    age : 20,
    email : "zohaib@gmail.com",
    isLoggedIn : true,
    location : "Jaipur",
    lastLoginDays : ["Monday", "Wednesday"],


} 

//How to Access.
// Using Dot : console.log(JsUser.name). But Object stores keys in form of strings. Better : console.log(JsUser["full Name"])

console.log(JsUser["full Name"])

//Also to access Symbol we need this method.

const mySymbol = Symbol("MyKey") 
const newObj={
    [mySymbol] : "MyKey"

}

console.log(newObj.mySymbol); //undef

console.log(newObj[mySymbol]); //MyKey

// Change Values.

JsUser.email = "z@gmail.com"

//Lock an Object ->no one can change

//Object.freeze(JsUser);

//Obbjects can also have fxns.

JsUser.greetings = function()
{
    console.log("Hello JSUser");
}
// Access - 2ways
console.log(JsUser.greetings); //Hello JSUser . Func refrence is also passed : [Function (anonymous)]
console.log(JsUser.greetings()); // Hello
//Undef.


//Refernce same object from an property of that object using this.

JsUser.greeting2 = function()
{
    console.log(`Hello JSUser, my name is ${this.name}`);
}

console.log(JsUser.greeting2());
/*
Hello JSUser, my name is Zohaib
undefined
*/



// ------ Objects

