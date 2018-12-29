const request = require('request');

// Ggl API key
const KEY = '&key=<api key here>'
const URL = 'https://maps.googleapis.com/maps/api/geocode/json?'

const geocodeAddress = (adr, callback) => {
        const encodeAdr = encodeURI(adr);
        request({
            url: `${URL}address=${encodeAdr}${KEY}`,
            json: true
        }, (err, res, body) => {
            if (err) {
                callback('Unable to connect to Google servers.');
            } else if (body.status === 'ZERO_RESULTS') {
                callback('Unable to find that address.');
            } else if (body.status === 'OK') {
                callback(undefined, {
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        })
    }

module.exports = {
    geocodeAddress: geocodeAddress
}
