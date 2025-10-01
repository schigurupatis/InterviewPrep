// FOR Loop 

for(let i = 0; i <= 5; i++) {
    console.log("Hello World", i);
}


// Reverse FOR Loop

for(let i = 5; i > 0; i--) {
    console.log("Hello World", i);
}


// FOR Loop not true

for(let i = 5; i < 4; i++) {
    console.log("Hello World", i);
}


// FOR Loop Test with VAR
for(var i = 0; i < 5; i++) {
    console.log("VAR Inside the loop Hello World", i);
}
console.log("VAR Outside the loop Hello World", i);


// FOR Loop Test with LET

// for(let j = 0; j < 5; j++) {
//     console.log("LET Inside the loop Hello World", j);
// }
// console.log("LET Outside the loop Hello World", j);



// LET with 0 
for(let i=0; i>0; i++) {
    console.log("PRINGING 0 FROM")
}


// call a function inside loop
function greet(i) {
    console.log("Function inside a loop:", i);
}
for(let i = 1; i < 5; i++) {
    greet(i);
}

