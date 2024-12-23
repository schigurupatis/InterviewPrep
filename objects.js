console.log("Start")
function myFun() {
    console.log("this is my function");
}

myFun();

const newMyFun = new myFun();

console.log(newMyFun)
console.log("End")