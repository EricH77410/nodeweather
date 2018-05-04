const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

geocode.geocodeAddress(argv.address, (error, results) => {
    if (error) {
        console.log(error);
    } else {
        console.log(JSON.stringify(results, undefined, 2));

        weather.getWeather(results.latitude, results.longitude, (err,data)=>{
            if (err) {
                console.log(err);
            } else {
                console.log("===== WEATHER INFO =====")
                console.log(`It's currently ${data.temp}. It feels like ${data.apparentTemp}`)
            }            
        })        
    }
});



