const path = require('path');
const express = require('express')
const hbs = require('hbs')

// console.log(__dirname)
// console.log(__filename)
// console.log(path.join(__dirname, '../public'))

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views')
const pirtialPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(pirtialPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'PL;CO'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'PL;CO'
    })
})

app.get('/about2', (req, res) => {
    res.render('about2', {
        title: 'About Me',
        name: 'PL;CO'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help You',
        name: 'PL;CO',
        message: 'Helping Messag'

    })
})

app.get('/weather', (req, res) => {
    res.send({
        forcast: 'forecast',
        location: 'localhost'
    })
})

app.get('*', (req, res) => {
    res.send('My 404 page')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
