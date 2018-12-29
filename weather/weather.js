const request = require('request');

const KEY = <api key here>;
const URL = 'https://api.darksky.net/forecast/'+KEY+'/';

const getWeather = (lat, lng, callback) => {
    request({
        url: `${URL}${lat},${lng}`,
        json:true
    }, (err, res, body) => {
        if (err) {
            callback('Unable to get the weather')
        } else if(res.statusCode === 400){
            callback('Unable to fetch  weather, check your api key our the location data')
        } else if (res.statusCode === 200){
            callback(undefined, {
                info: body.currently.summary,
                icon: body.currently.icon,
                temp: body.currently.temperature,
                apparentTemp: body.currently.apparentTemperature
            });
        }
    })
}

module.exports = {
    getWeather: getWeather
}
