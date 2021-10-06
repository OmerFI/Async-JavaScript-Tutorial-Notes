const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest(); // this creates us a request object

        request.addEventListener('readystatechange', function () { // this fires every time there's a state change
            //console.log(request, request.readyState);
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject('error getting resource');
            }
        });

        // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
        request.open('GET', resource)
        request.send()
    });
};

getTodos('todos/luigis.json').then(data => {
    console.log('promise resolved:', data);
}).catch(err => {
    console.log('promise rejected:', err);
});

// promise example

// const getSomething = () => {

//     return new Promise((resolve, reject) => {
//         // fetch something
//         resolve('some data');
//         // reject('some error');
//     });

// };


// getSomething().then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// });

// Yukarıdakine alternatif:

// getSomething().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })