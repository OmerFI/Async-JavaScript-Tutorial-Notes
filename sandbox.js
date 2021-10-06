const getTodos = (resource, callback) => {
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
    request.open('GET', resource)
    request.send()
};

// This is called Callback Hell
getTodos('todos/luigi.json', (err, data) => { // convention: error first, data second
    console.log(data);
    getTodos('todos/mario.json', (err, data) => {
        console.log(data);
        getTodos('todos/shaun.json', (err, data) => {
            console.log(data);
        });
    });
});