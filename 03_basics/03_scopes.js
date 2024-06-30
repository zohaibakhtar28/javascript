//Nested Scopes.
 
function one()
{
    const user = "Zohaib"

    function two()
    {
        const website = "youtube"
        console.log((user)); //Can access
    }
    console.log(website); //can't access
    two(); //Wont execute due to error above
}

one();

//Same is possible with if-else and others.

{
    //This defines an scope of any entity.
}


//Interesting Case:
//functions are declared in 2 ways.


addOne(5) //Acceptable
function addOne(val)
{
    return val+1
}

addTwo(5) //Not Acceptable. ->Concept of hoisting.
const addTwo = function(val)
{
    return val + 2
}
