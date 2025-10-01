var arr = [5, 10, 7, 14, 9, 19, 30];

// console.log("Array values are", arr[0]);
// console.log("Array values are", arr[1]);
// console.log("Array values are", arr[2]);
// console.log("Array values are", arr[3]);
// console.log("Array values are", arr[4]);
// console.log("Array values are", arr[5]);
// console.log("Array values are", arr[6]);

// for(let i = 1; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 == 0) {
//         console.log("even numbers are:", arr[i])
//     } else {
//         console.log("odd numbers are:", arr[i])
//     }
// }



let evenNumbersAre = [];
let oddNumbersAre = [];
for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0) {
        evenNumbersAre.push(arr[i]);
        // console.log("even numbers are:", evenNumbersAre)
    } else {
        oddNumbersAre.push(arr[i]);
        // console.log("odd numbers are:", oddNumbersAre)
    }
        console.log("even numbers are:", evenNumbersAre)
        console.log("odd numbers are:", oddNumbersAre)
}