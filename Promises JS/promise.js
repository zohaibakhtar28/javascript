// Mostly we consume promises used in place of Async Await. Promise is now used
// How to create Promise :-

const promiseOne = new Promise(function(resolve, reject) {
    // Do ASYNC tasks - DB Tasks, N/w Tasks
    setTimeout(function(){console.log(`Aync is Completed`);
     resolve();   
    }, 1000)
})

//call ->

promiseOne.then(()=>{
    console.log("Promise Consumed");
})
// OP : Aync is Completed

//To connect promise we need to call resolve inside promise
/*
Aync is Completed
Promise Consumed
*/

//We can also do it without storing in Variable name


new Promise(function(resolve, reject) {
    // Do ASYNC tasks - DB Tasks, N/w Tasks
    setTimeout(function(){console.log(`Aync2 is Completed`);
     resolve();   
    }, 1000)
}).then(function(){
    console.log('Async 2 resolved!');
})
/*
Aync2 is Completed
Async 2 resolved!
*/

// Now Resolve is connected to .then so data ayega promise mai to usko kasie pass kare then mai?


new Promise(function(resolve, reject){

    setTimeout(()=> {
        resolve({username : 'Zohaib', email : 'zohaibakhtar0208@gmail.com'})
        console.log("Async 3 is Completed");
    }, 1000)
}).then(function(user){
    console.log(`Async 3 is Resolved : DATA ${user.username}`);
})
/*
Async 3 is Completed
Async 3 is Resolved : DATA Zohaib
*/


// Then can be chained , .catch is used to handle errors, .finally -> isme sabkuch aata hai


const promiseFour = new Promise(function(resolve, reject){

    setTimeout(()=>{

        let error = false;
        if(!error)
        {
            resolve({username : 'Zohaib', Gender : 'Male'})
        }
        else{
            log('Something Went wrong!')
        }
    }, 1000)
}).then((user)=>{
    console.log(user);
    //we only want to send username
    return user.username
}).then((username) =>{
    console.log(`Username : ${username}`)
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log(("the promise is either resolvced or rejected"));
})
/*
{ username: 'Zohaib', Gender: 'Male' }
Username : Zohaib
the promise is either resolvced or rejected
*/

//Handling promises using Async Await
const promiseFive = new Promise(function(resolve, reject) {

    setTimeout(()=>{
        let error = false;
        if (!error) {
            resolve({username : 'Zohaib', Price : '100'})
        } else {
            reject('JS went wrong')
        }
    }, 1000)
});

//Note always use try catch in ASYNC AWAIT FXN
async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
    
}


consumePromiseFive() // when error true -> JS went wrong// no error : { username: 'Zohaib', Price: '100' }


// ASYNC wait is used to get data from databases or we can use .then.catch ex_


async function getAllUsers()
{
    try {
        const response = fetch('https://jsonplaceholder.typicode.com/users')

        console.log(response)
        // const data = (await response.json()
        // console.log(data);
        
    } catch (error) {
        console.log("E: ", error);
        
    }
}

/*
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()}).then.catch()
*/
