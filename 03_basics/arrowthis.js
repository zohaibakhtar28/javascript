const user = {

    username : "Zohaib",
    price : 999,

    greeting : function()
    {
        console.log(`${this.username} welcome to website`);
    }
}


user.greeting // No OP.
user.greeting() // OP  : Zohaib welcome to website


user.username = "Sam" //Context Changed.
user.greeting() // Sam welcome to websitere

//Note if we log(this) -> refers to an empty object in NodeJs. If we do in Windows ->refers to Window.


//Note : This cannot be used within an function.

function chai()
{
    let name = 'Zohaib'
    //console.log(${this.name}); //Undefined.
}

const chai2 = function()
{
    let name = 'Zohaib'
    //console.log(${this.name}); //Undefined.
}


//Arrow fxns


const chai3 = () =>{
    let name = 'Zohaib'
    //console.log(${this.name}); //Undefined.

}

// Arrow funtions.

//Basic : (parameters) => {}. 

const addTwo = (num1 , num2) =>{
    return num1+num2;
}

console.log(addTwo(1,2)); // 3

//another way

const addTwo2 = (num1 , num2) => num1+num2; //Also called implicit declaration : no need for return
console.log(addTwo2(1,2)); //3

//another way
const addTwo3 = (num1 , num2) => (num1+num2) //Also called implicit declaration : no need for return
console.log(addTwo2(1,2)); //3

//Implicit Declaration are used in returning objects

const newFunc = ()=>({username :"Zohaib"})





