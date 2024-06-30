//if

//(comparisons which return true or false). ex
const userLoggedIn = true;
if(userLoggedIn)
{
    console.log(`User Logged In!`);
}

//if-  else : same as before.

const score = 200;
if(score>100)
{
    let power = 'fly'
    
}

//log(`${power}) --> cant be accessed.
//but if it was var it can be accessed.

//Shorthand Notation

const bal = 100
if(bal > 500) console.log("test"); //Implicit Declaration

//If else can be nested also.

//false vals-> 0, -0, NaN, Undefinded, false, bigInt, 0n
//true vals -> "0", 'false', ' ',[],{}, function(){}


//How to check if an obj is empty or Not

const myObj = {

}

if(Object.keys(myObj).length === 0)
    {
        console.log(`Empty Object`);
    }

//Nullish Coalescing Operator(??) : works on null, undef.

//Used for safety check of NULL and UNdef.

let var1 = 10;
var1 = 10 ?? 5 //var1 = 10.

var1 = null
var1 = null ?? 15 // var1 = 15.

//If var1 is null apply 15 to it if not apply whatever the first avlue is . Used when data comes from DB / Firebase etc. Used in Error Handling.

//Ternary : condition ? true : false


