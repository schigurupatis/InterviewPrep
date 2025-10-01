// Write a function that searches for an element in an array and returns the index, if the element is not present then just return -1


var arr = [1,5,7,4,9];


function findsAnElement(ele) {
    console.log("input element is:", ele);
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === ele) {
            console.log("Element Founded in the array at index of:", i);
            return i;
        }
    }
    console.log("Element Not Founded in the array");
    return -1;
}

let result = findsAnElement(10);

console.log(result);