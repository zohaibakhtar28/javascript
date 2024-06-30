// for of

const arr = [1, 2, 3, 4, 5]

for (const val of arr) {
   // console.log(val); //

}

// can also be applied on strings

const greetings = "Hello World!"
for (const greet of greetings) {
    //console.log(greet); 
}

/*
H
e
l
l
o
 
W
o
r
l
d
!
*/

//Maps : Stores Key Value Pairs where no duplicate values will be present.

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'America')
map.set('FRA', 'France')
map.set('IN', 'INDIA') // Only stores one entry for duplicate data

//console.log(map); //Map(3) { 'IN' => 'INDIA', 'USA' => 'America', 'FRA' => 'France' }

for (const key of map) {
   // console.log(key);
}
/* output is inside an array.
[ 'IN', 'INDIA' ]
[ 'USA', 'America' ]
[ 'FRA', 'France' ]
*/

//for alag alag key val pairs

for (const [key, value] of map) {
   // console.log(key, value);
}

/*
    IN INDIA
USA America
FRA France
*/



//On Object

const myObj = {
    game1: 'NFS',
    game2: 'Spiderman',
    game3: 'GTA',
}

//forof is not ieratable by forof.

const newObj = {
    game1: 'NFS',
    game2: 'Spiderman',
    game3: 'GTA',
}

//Use For IN for iterating objects.

for (key in newObj) {
    //console.log(key);
    /*  game1
        game2
        game3
    */
    //console.log(`Keys : ${key} -> ${newObj[key]}`);

    /*
        Keys : game1 -> NFS
        Keys : game2 -> Spiderman
        Keys : game3 -> GTA
    */

}

//forof sidha values deta hain. For in keys deta hai. For In ko array pe lagake index milega. Map is not iteratable by for in

//For Each Loop : Most Used

const coding = ['js', 'cpp', 'ruby', 'java', 'swift']

//coding.forEach() // Inside we''l have a callback fxn we can with will have array items as parameter in each iteration. We can also pass another fxn as refrence in callback fxn

coding.forEach( function(item) {
    // console.log(item);
    // js
    // ruby
    // java
    // swift
    // cpp
})

//we can also use arrow functions
coding.forEach((item) =>{
   // console.log(item);
})

//passing another fxn as callback

coding.forEach((printme))


function printme(item)
{
    console.log(item);
}


//we also have other parameters in for each

coding.forEach((item,index,arr)=>{
    console.log(item, index,arr);
})

// js 0 [ 'js', 'cpp', 'ruby', 'java', 'swift' ]
// cpp 1 [ 'js', 'cpp', 'ruby', 'java', 'swift' ]
// ruby 2 [ 'js', 'cpp', 'ruby', 'java', 'swift' ]
// java 3 [ 'js', 'cpp', 'ruby', 'java', 'swift' ]
// swift 4 [ 'js', 'cpp', 'ruby', 'java', 'swift' ]


//Mostly we'll have : Objects in arrays. USe for each 