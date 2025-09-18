const url = "https://jsonplaceholder.typicode.com/posts";

fetch("url")
    .then((res) => {
        console.log(res.json);
    })
    .then((data) => {
        console.log(data)
    })