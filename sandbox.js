const request = new XMLHttpRequest(); // this creates us a request object

request.addEventListener('readystatechange', function () { // this fires every time there's a state change
    //console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200) {
        console.log(request, request.responseText);
    } else if (request.readyState === 4) {
        console.log('could not fetch the data');
    }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todoss/')
request.send()