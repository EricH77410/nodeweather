console.log('Starting app...');

setTimeout(() => {
    console.log('Inside the callback');
}, 2000 );

setTimeout(() => {
    console.log('This is the second callback');
}, 500);

console.log('Finish up !');