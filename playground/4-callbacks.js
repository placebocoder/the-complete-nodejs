setTimeout(() => {
    console.log('Two seconds are up')
}, 2000)

const names = ['Androw', 'Jen', 'Jess']
const shortName = names.filter((name) => {
    return name.length <= 4
})

const geocode = (address, callback) => {
    // const data = {
    //     latitude: 0,
    //     longtitude: 0
    // }
    // return data
    setTimeout(() => {
        const data = {
            latitude: 0,
            longtitude: 0
        }
        callback(data)
    }, 2000)
}

// const data = geocode('Seoul')

// console.log(data)

geocode('Seoul', (data) => {
    console.log(data)
})


const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum)
})

