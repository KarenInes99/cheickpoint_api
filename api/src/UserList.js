const promise1 = fetch("https://jsonplaceholder.typicode.com/users");
promise1.then((response) => {
    console.log(response);
});