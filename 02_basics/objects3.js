// destructuring objects.

const course ={
    name : "JS",
    price: 999,
    teacher :"hitesh"
}

//Making Code Clean. //Using destructuring
const {teacher} = course
console.log(teacher);

//further shorten property name to our way.

const{teacher : guru} = course
console.log(guru);

// API Concepts : Apna kaam kisi aur ke sar pe

//Values come from backend in JSON Form - It's an Object. Example

{
    "name" : "Zohaib",
    "price" : "free",
    "name" : "JavaScript"
}

//API can also comes in : JSON, Array of objects. 