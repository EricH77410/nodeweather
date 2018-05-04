const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var encodeAddress = encodeURI(argv.address);
var geocode = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=AIzaSyBKH4KlBvFEeufyeZDkkNZgnoy5qQpXaR0`

axios.get(geocode).then((response) => {
    if(response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address.');
    }

    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weather = `https://api.darksky.net/forecast/b77a61d21aca14b562756987f6e9f7c1/${lat},${lng}`

    console.log(response.data.results[0].formatted_address);

    return axios.get(weather)

}).then((response) => {
    var temp  = response.data.currently.temperature;
    var apparent = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temp}. It feels like ${apparent}`); 
}).catch((e) => {
    if (e.code === 'ENOTFOUND') {
        console.log('Unable to connect to API servers.');
    } else {
        console.log(e.message)
    }
    
});

