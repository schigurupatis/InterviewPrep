// Array length 

const arr = [1,2,3];
console.log("Intiala Array Length is: ", arr.length);

arr[4] = 5;
console.log("Modified Array Length is: ", arr.length);
console.log("Modified Array is: ", arr);


const arr1 = [1,2,3];

//Reduce method

const newArray = arr1.reduce((acc, curr) => {
    return ("total is: ", acc + curr);
})

console.log(newArray)


// function testing() {
//     arr1.reduce((acc, curr) => {
//         console.log("total is: ", acc + curr);
//     })
// }

// testing();
