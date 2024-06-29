// One common situation : SHopping cart where user keeps on adding items and we keep on adding, we don't know how many arguments will be passed.

// use rest operators.

function myCartPrice(...num) //Returns all values in binded in an array.
{
    return num;
}

console.log(myCartPrice(200,100,234)); // [ 200, 100, 234 ]

//Pass Object to Functions.

const user = {
    name : "Zohaib",
    price : 399
}

function handleObject(anyObject)
{
    console.log(`Hello username is : ${anyObject.name}`);
}

handleObject(user) //Hello username is : Zohaib

//Similarly we can pass arrays to functions.





