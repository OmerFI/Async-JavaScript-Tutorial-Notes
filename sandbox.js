// fetch api - Async & Await

const getTodos = async () => {

    const response = await fetch('todos/luigi.json')
    const data = await response.json();
    return data;

};
// whenever we call an asynchronous function that always returns a promise

console.log(1);
console.log(2);
getTodos()
    .then(data => console.log('resolved:', data))
    .catch(err => console.log(err));
console.log(3);
console.log(4);

// const test = getTodos();
// console.log(test); // Promise
