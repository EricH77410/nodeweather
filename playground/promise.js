
var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number'){
                resolve(a + b);
            } else {
                reject('Arguments must be numbers');
            }
        },1500)
    });
}

asyncAdd(4,5).then((res) => {
    console.log('Result: ',res);
    return asyncAdd(res, 9);
}).then((res) => {
    console.log('Should be 18: ', res);
}).catch( (e) => {
    console.log('Error: ', e);
})

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         //resolve('Hey ! ça marche gros !');
//         reject('Error in the promise !');
//     }, 2500)
    
// });

// somePromise.then((msg) => {
//     console.log('Success: ', msg)
// }, (err) => {
//     console.log('Error: ',err);
// })