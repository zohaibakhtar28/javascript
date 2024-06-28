const myArr = [1,2,3, "Zohaib", true];
const myArr2 = new Array(1,2,3, "Zohaib", true);
console.log(myArr2);

// In JS Copy opearations of array cause a Shallow Copy(properties share same ref point).

// Methods. push, pop, includes, indexOf

myArr.unshift(0);
console.log(myArr);// Add Element at start.
 //shift removes element from start.



 const myArr3 = myArr.join();
 console.log(myArr3); //Binds array and Convert to strings 'Comma Seprated'

// slice vs splice.
let cars = ["A", "b", "c", "d", "e"]
let new_cars = cars.slice(1,4);
console.log("Cars", cars);
console.log("new_cars", new_cars);

//op : 
/*
Cars [ 'A', 'b', 'c', 'd', 'e' ]
new_cars [ 'b', 'c', 'd' ]
*/

let newcars2 = cars.splice(1,4);
console.log("cars", cars);
console.log("newcars2", newcars2);

/*
cars [ 'A' ]
newcars2 [ 'b', 'c', 'd', 'e' ]
*/

// More Methods.

const marvel =["thor", "ironman", "spiderman"]
const dcheroes = ["superman", "flash", "batman"]

//marvel.push(dcheroes); //return marvel with dc heroes inserted as an array
console.log(marvel); //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

//use concat

//console.log(marvel.concat(dcheroes)); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//ANother is spread Method

const newArr = [...marvel ,...dcheroes] //concat 'n' arrays 
console.log(newArr); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]



//Convert Array from discrete Val

let s1 =1
let s2 =2
let s3 =3

const newArr2 = Array.of(s1,s2,s2)
console.log(newArr2); //[ 1, 2, 2 ]

//Convert to Array.
const newArray3 = Array.from("Zohaib");
console.log(newArray3); //[ 'Z', 'o', 'h', 'a', 'i', 'b' ]

//Flatten an array.

const newArr4 = [1,2,[1,2,[456]]];
console.log(newArr4.flat(Infinity)); //[ 1, 2, 1, 2, 456 ]




