// Immediately Invoked Fxn Expression.
// Used in Encapsulating code from global scope pollution.
// Immediately Invoked as soon as written


//Normal

function chai()
{
    console.log(`DB Connected!`);
}
//chai();


(function chai2()
{
    console.log(`DB Connected 2!`);
})(); // IFFE : OP ->DB Connected 2!

//Arrow Fxns can also be used as IIFE. 

//Named IIFE 
(chai3 = () =>{
    console.log(`DB3 Connected `);
})(); //DB3 Connected 

//Unnamed IIFE 

( () =>{
    console.log(`DB4 Connected `);
})(); //DB4 Connected 

//How to pass an argument to an IIFE.

((name) => {
    console.log(`Welcome ${name}`);
})('Zohaib'); //Welcome Zohaib

//Make sure to always add ; after an IIFE to stop its context.