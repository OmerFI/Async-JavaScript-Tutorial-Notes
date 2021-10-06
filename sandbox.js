// fetch api

fetch('todos/luigi.json').then((response) => {
    console.log('resolved', response);
    return response.json();
}).then(data => {
    console.log(data);
}).catch((err) => {
    console.log('rejected', err);
});
// yanlış endpointe istek atsak bile catch çalışmayacak
// the way the fetch api works is that the promise is only ever rejected when we get some kind of network error.
