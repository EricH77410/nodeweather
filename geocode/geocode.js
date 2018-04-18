const request = require('request');

// Ggl API key
const KEY = '&key=AIzaSyBKH4KlBvFEeufyeZDkkNZgnoy5qQpXaR0'
const URL = 'https://maps.googleapis.com/maps/api/geocode/json?'

const geocodeAddress = (adr) => {
        const encodeAdr = encodeURI(adr);
        request({
            url: `${URL}address=${encodeAdr}${KEY}`,
            json: true
        }, (err, res, body) => {
            if (err) {
                console.log('Unable to connect to Google servers.')
            } else if (body.status === 'ZERO_RESULTS') {
                console.log('Unable to find that address.');
            } else if (body.status === 'OK') {
                console.log(`Address: ${body.results[0].formatted_address}`);
                console.log(`Lat: ${body.results[0].geometry.location.lat}`);
                console.log(`Lon: ${body.results[0].geometry.location.lng}`);
            }
        })
    }

module.exports = {
    geocodeAddress: geocodeAddress
}
