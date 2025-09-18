//Sivaram Nyayapati

const arr = [1,1,2,2,3,3]

//const arr = [1, 1, 2, 2, 3, 3];

// Using Set to remove duplicates
const uniqueArr = [...new Set(arr)];

console.log(uniqueArr); // Output: [1, 2, 3]



//https://jsonplaceholder.typicode.com/posts

 

// Create Custom Hook to fetch data from API
// Use the component and display response in the table
// Sivaram Nyayapati

//let a = [1,2,3,2,3,3,4,4]   
//output : {1 : 1, 2 : 2, 3 : 3, 4 : 2 }  



let a = [1, 2, 3, 2, 3, 3, 4, 4];

// Using reduce to count occurrences
const result = a.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1; // Increment count or initialize to 1
  return acc;
}, {});

console.log(result);
// Output: {1: 1, 2: 2, 3: 3, 4: 2}
