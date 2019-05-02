const request = require('request')
const forecast = (latitude, longtitude, callback) => {
    const url = 'https://api.darksky.net/forecast/e1ca7cd4975f2d77b2bf126f35bf86c6/' + latitude + ',' + longtitude + '?units=si&lang=ko'

    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback("Unable to connect to weather service!", undefined)
        } else if(body.error) {
            callback("Unable to find location", undefined)
        } else {
            callback(undefined, body.currently.temperature + " : " + body.currently.precipProbability + "%")
        }
    })    
}

module.exports = forecast