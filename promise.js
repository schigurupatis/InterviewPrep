console.log("Staring the code");

// selectors
const button = document.getElementById("resolveButton");
const message = document.getElementById("message");

// Creating a promise
const myPromise1 = new Promise((resolve, reject) => {

    // Adding event lister for onClicking
    button.addEventListener("click", ()=> {
        resolve("Promise has been resolved after button click!")
    });
});

// Handle the resolved promise
myPromise1
    .then((result) => {
        message.textContent = result;
    })
    .catch((err) => {
        message.textContent = err;
    })



console.log("Ending the code");