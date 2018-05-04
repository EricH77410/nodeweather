const request = require('request');

const KEY = '&key=AIzaSyBKH4KlBvFEeufyeZDkkNZgnoy5qQpXaR0'
const URL = 'https://maps.googleapis.com/maps/api/geocode/json?'

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        request({
            url: `${URL}address=${address}${KEY}`,
            json: true
        }, (err, res, body) => {
            if (err) {
                reject(err)
            } else {
                resolve(body)
            }
        })
    })
};

geocodeAddress('paris').then((loc) => {
    console.log(JSON.stringify(loc, undefined, 2));
}, (e) => {
    console.log('Error: ', e)
})