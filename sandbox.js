// fetch api - Async & Await - Throwing Errors

const getTodos = async () => {

    const response = await fetch('todos/luigis.json')

    if (response.status !== 200) {
        throw new Error('cannot fetch the data');
        // when we throw a new error inside an asynchronous function the promise returned by this asynchronous function is rejected.
        // therefore if it's rejected we're going to catch it in the catch function
    }
    const data = await response.json();
    return data;

};
// whenever we call an asynchronous function that always returns a promise

getTodos()
    .then(data => console.log('resolved:', data))
    .catch(err => console.log('rejected:',err.message));

// const test = getTodos();
// console.log(test); // Promise
