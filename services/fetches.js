const fetch = require('node-fetch')

const getQuote = () => {
    return fetch('http://futuramaapi.herokuapp.com/api/quotes/1')
        .then(res => res.json())
        .then(([results]) => results)
}

module.exports = {
    getQuote
}