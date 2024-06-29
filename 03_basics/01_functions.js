//Functions code ko package mai band kardiya & called when needed.example

function sayMyName()
{
    console.log("Z");
    console.log("O");
    console.log("H");
    console.log("A");
    console.log("I");
    console.log("B");
}

//call - sayMyName()
//sayMyName ->reference.



//function 
function addTwoNumbers(num1, num2) //parameters
{
    let sum = num1+num2;
    console.log(`Sum is ${sum}`);
}

addTwoNumbers(1,2); //Arguments //Sum is 3
addTwoNumbers(1 , "2")
addTwoNumbers("1" ,2)
addTwoNumbers(2, null)

/*Sum is 12
Sum is 12
Sum is 2 //Alwways make sure of datatypes of Arguments
*/


//Return a value from function
function addTwoNumbers2(num1, num2) //parameters
{
    const sum = num1+num2;
    return sum

}

const result = addTwoNumbers2(1,2)
console.log(`Sum is ${result}`); // Sum is 3

//one common mistake.

function userLoggedIn(username)
{
    return `${username} just Logged In`
}

// if we only call : userLoggedIn : No Output.

console.log(userLoggedIn('Zohaib')); //Zohaib just Logged In. If we dont pass anything : undefinded just logged in. We can use if else.

function userLoggedIn2(username)
{
    if(!username)
        {
            console.log('Please Enter Username.');
            return
        }
    return `${username} just Logged In`
}

// We can also add default value in fnction signature.
//function userLoggedIn2(username = 'user')






