var getUser = (id, callback) => {
    var user = {
        id:id,
        name: 'Rico'
    }
    setTimeout(()=>{
        callback(user);
    },3000)
    
};

getUser(18, (user) => {
    console.log(user);
});
console.log('We are fetching data ...');