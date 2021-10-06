const getTodos = (callback) => {
    const request = new XMLHttpRequest(); // this creates us a request object

    request.addEventListener('readystatechange', function () { // this fires every time there's a state change
        //console.log(request, request.readyState);
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback('could not fetch', undefined);
        }
    });

    // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
    request.open('GET', 'todos.json')
    request.send()
};

console.log(1);
console.log(2);

getTodos((err, data) => { // convention: error first, data second
    console.log('callback fired');
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
});

console.log(3);
console.log(4);