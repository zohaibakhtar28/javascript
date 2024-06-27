

console.log("2" > 1); //t
console.log("2" >= 1);//t
// 2 is automatically converted to number.

console.log(null > 0); //f
console.log(null == 0); //f
console.log(null >= 0); //t

// Comaparator converts null to 0 and Assignment Operation Works differently. Compariosn of diff datatypes gives inefficient result.

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

//Undefined gives all false.

// === strict check. Checks val as well as data type.

