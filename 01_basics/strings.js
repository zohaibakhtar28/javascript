//declare.
 const name = "Zohaib"
 const name2 = 'Akhtar'
 const name3 = new String('Zohiab')  // Modern Method. Has Key Value pairs, prototype and length properties.


 //Concat:
 //OLD : 
console.log(name + " "+name2);
//New
console.log(`Hello My firstname is ${name} and my second name is ${name2}`);


//properties :-
console.log(name.length);

// Some Functions:-
const newName = name+name2
console.log(newName.charAt(0));
console.log(newName.indexOf('a'));
console.log(newName.toUpperCase());
console.log(newName.substring(0,4));
console.log(newName.slice(-12,4));
console.log(newName.includes('Akh'));

const url = 'zohaib-akhtar-0202-@github.io'

console.log(url.split('-'));
console.log(url.replaceAll('-', '/'));


const newVar = "   Zohaib"
console.log(newVar.trim());

