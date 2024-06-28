// Objects with Singleton.

const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "Z"
tinderUser.isLoggedIn = true

// Objects Inside Objects

const regularUser = {
    email : "abc@gmail",
    fullname :{
        userfullname:{
            first : "Zohaib",
            last : "Akhtar"
        }
    }
}

//Access : 
console.log(regularUser.fullname.userfullname.first); //Zohaib.

//Optional : console.log(regularUser.fullname?.userfullname.first);

//Combine Objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// obj3 = {obj1, obj2} : objct inside object : not good.

const obj3 = Object.assign(obj1,obj2)

//Better : const obj3 = Object.assign({}, obj1,obj2) ->add multiple objects

console.log(obj3);

//Most USed:- Spread

const combine = {...obj1, ...obj2}
console.log(combine);

//When Values comes from DB. Array of objects.


//Extarct Keys . Methods on Objects

console.log(Object.keys(tinderUser));//Get all keys and stores in an array. Similarly : .values(objectName) We can loop through.

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

