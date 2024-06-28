// date is an object in JS. JS stores date in millisec from Jan 1 1970.

const myDate = new Date()
console.log(myDate); // 2024-06-28T18:28:25.527Z

// More Readable Formats
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

/*
Fri Jun 28 2024 18:29:25 GMT+0000 (Coordinated Universal Time)
Fri Jun 28 2024
6/28/2024, 6:29:25 PM
*/

//Custom Dates

let newDate = new Date(2023,0,23)
let newDate2 = new Date(2023,0,23,5,3) //Month Starts From 0 in JS
console.log(newDate.toDateString()); //Mon Jan 23 2023
console.log(newDate2.toLocaleString()); //1/23/2023, 5:03:00 AM

//Dates in OTHER FORMATS.
let newDate3 = new Date("01-00-2026");
console.log(newDate3.toLocaleString());



// TimeStamps

let myTS = Date.now();
console.log(myTS); //1719599885413

//to compare

myDate.getTime();
console.log(myTS);


//get month or Day.

const date5 = new Date;
console.log(date5.getDate()); //get Day, get Month.