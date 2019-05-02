const https = require('https')
const url = 'https://api.darksky.net/forecast/e1ca7cd4975f2d77b2bf126f35bf86c6/40,-37?units=si&lang=ko'

const request = https.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) =>{
    console.log('Error', error)
})
request.end()