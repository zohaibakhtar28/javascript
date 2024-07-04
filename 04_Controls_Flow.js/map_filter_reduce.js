const coding = ["js", "ruby", "java", "python", "cpp"]

//for each doesnt return any item even if we want to

//Filter : Inside this we use a condition and all items are returned one by one which satisfy the condition

const myNums = [1,2,3,4,5,6,7,8,9,10]

const nums = myNums.filter((num) => (num > 4))
//console.log(nums);
//[ 5, 6, 7, 8, 9, 10 ]

//Note if we do explicit declaration {} then we need to use return

const nums2 = myNums.filter((num) => {
    return num > 4
})
//console.log(nums2); //[ 5, 6, 7, 8, 9, 10 ]

//Filters are mostly used to fetch data from databases

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

//let ans  = myNumbers.map((num) => num + 10)
//console.log(ans); 

/*
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]
*/

//we can chain any number of map and filter operations

const ans = myNumbers
            .map((num) => num * 10)
            .map((num) => num+1 )
            .filter((num) => num > 15)
console.log(ans);

/*
[
  21, 31, 41,  51, 61,
  71, 81, 91, 101
]
*/
//Map ->used to do operations
//Filter used to return items which matches conditions


const demoArr = [1,2,3]

const res = demoArr.reduce((acc, curr)=>{
    return acc + curr
}, 0)


console.log(res); //6
//or we can also do 
const res2 = demoArr.reduce((acc,curr)=>(acc+curr), 0)

//Reduce used in adding shopping carts, 0 is initial value and acc each time has val which is returned

const courses = [
    {
        name : "Web Dev",
        price : 2000
    },
    {
        name : "Data Science",
        price : 5000

    },
    {
        name : "Android Dev",
        price : 3999
    }
]

const total = courses.reduce((acc, curr) => (acc+curr.price), 0)
console.log(total); //10999
