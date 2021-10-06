const request = new XMLHttpRequest(); // this creates us a request object

request.addEventListener('readystatechange', function() { // this fires every time there's a state change
    //console.log(request, request.readyState);
    if (request.readyState === 4) {
        console.log(request.responseText);
    }
}); 

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
request.send()

