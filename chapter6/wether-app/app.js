const request = require('request')

// // units set 'si' to change that temperature degrees celsius.
// // language set 'ko'
// const darkskyUrl = 'https://api.darksky.net/forecast/e1ca7cd4975f2d77b2bf126f35bf86c6/37.5665,126.978?units=si&lang=ko'

// request({url: darkskyUrl, json: true}, (error, response) => {
//     // const data = JSON.parse(response.body)
//     // console.log(data.currently)
//     // console.log(response.body)
//     if(error) {
//         console.log("Unable to connect to weather service!")
//     } else if(response.body.error) {
//         console.log("Unable to find location")
//     } else {
//         console.log(response.body.currently.temperature + ":" + response.body.currently.precipProbability + "%")
//     }
// })

// const mapboxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Seoul.json?access_token=pk.eyJ1IjoiaHl1bmdhdGUiLCJhIjoiY2p2NnBhMmt2MDdqeDQzcGd4d2VldHZ3ZSJ9.ryFqQ31nwpFNsanl6Y1KQA'

// request({url: mapboxUrl, json: true}, (error, response) => {
//     if(error) {
//         console.log('Unable to connect to locatin service!')
//     } else if(response.body.features.length === 0) {
//         console.log('Unable to find that locatin')
//     } else {
//         const latitude = response.body.features[0].center[0]
//         const longitude = response.body.features[0].center[1]
//         console.log(latitude, longitude)
//         const darkskyUrl = 'https://api.darksky.net/forecast/e1ca7cd4975f2d77b2bf126f35bf86c6/' + '37.5665,126.978' + '?units=si&lang=ko'

//         request({url: darkskyUrl, json: true}, (error, response) => {
//             // const data = JSON.parse(response.body)
//             // console.log(data.currently)
//             // console.log(response.body)
//             if(error) {
//                 console.log("Unable to connect to weather service!")
//             } else if(response.body.error) {
//                 console.log("Unable to find location")
//             } else {
//                 console.log(response.body.currently.temperature + ":" + response.body.currently.precipProbability + "%")
//             }
//         })
        
//     }
// })

const geocode = require('./geocode.js')
const forecast = require('./forecast.js')

const address = process.argv[2]

if(!address) {
    return console.log('Please provide an addres.')
}
geocode(address, (error, {latitude, longtitude, location}) => {
    if(error) {
        return console.log(error)
    }
    forecast(latitude, longtitude, (error, forecastData) => {
        if(error) {
            return console.log(error)
        }
        console.log(location)
        console.log(forecastData)
    })
})


// const forecast = require('./forecast.js')

// forecast(37.58333, 126.978, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })
