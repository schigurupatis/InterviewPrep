// 1. Find sum of all elements in an array.

const arr = [2, 4, 6, 8];

let finalResult = 0; // start with 0

for(let i = 0; i < arr.length; i++) {
    const currentValue = arr[i];
    finalResult = finalResult + currentValue; 
}
console.log("Sum of elements in given array is:", finalResult);



// 2. Find entered number is Even or Odd

function findEvenOrOdd(num) {
    let result = num % 2;

    if(result == 0) {
        console.log("Entered number is Even");
    } else {
        console.log("Entered number is Odd");
    }
}

findEvenOrOdd(4);
findEvenOrOdd(7);



// 3. find the largest number in an array

const largeArr = [12, 45, 7, 89, 23];


let result = largeArr[0];
console.log("Result is:", result);
function findLargeNumber(largeArr) {
    for(let i = 0; i< largeArr.length; i++) {
        console.log("Each number is:", largeArr[i]);
        let currentValue = largeArr[i];
        if(currentValue > result) {
            result = currentValue;
            console.log("Large Number inside If condition is:", result);
        }
        console.log("Large Number outside If condition is:", result);
    }
    console.log("Large Number outside Loop is:", result)
}

findLargeNumber(largeArr);




