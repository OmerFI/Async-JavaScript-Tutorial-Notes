# Async JavaScript

## Sync Code Execution

![Sync Code Execution Photo](note-imgs/Sync.png)

## Async Code Execution

![Async Code Execution Photo](note-imgs/Async.png)


---
> setTimeout: we're passing a function and that function fires after a certain amount of time that we specify.

Example Code:
```js
setTimeout(() => {
    console.log('callback function fired');
}, 2000) // 2 saniye sonra fonksiyon çalıştırılacak
```

This function is `asynchronous.`

JavaScript Code:
```js
console.log(1);
console.log(2);

setTimeout(() => {
    console.log('callback function fired');
}, 2000)

console.log(3);
console.log(4);
```
Output:
```
1
2
3
4
callback function fired
```

---

