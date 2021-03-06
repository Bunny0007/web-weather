const request = require('request')

const forecast = (latitude, longitude, callback) => {
    //const url = 'http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=' + longitude + ',' + latitude
    const url = 'http://api.weatherstack.com/current?access_key=d1fa5ed197d3f95eae356745ae0ada73&query=' + latitude + ',' + longitude


    //using destructuring objects and property short hand.
    //request({ url: url, json: true }, (error, response) => {
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,body.current.weather_descriptions[0] + ". It is currently " +body.current.temperature + " degress out. It feels Like "+body.current.feelslike+" ,With humidity "+body.current.humidity+"%." )
        }
    })
}

module.exports = forecast