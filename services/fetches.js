const fetch = require('node-fetch')
const request = require('superagent')

const getQuote = () => {
    return fetch('http://futuramaapi.herokuapp.com/api/quotes/1')
        .then(res => res.json())
        .then(([res]) => res)
}

const getSuperQuote = () => {
    return request.get('http://futuramaapi.herokuapp.com/api/quotes/1')
        .then(({ body }) => body)
        .then(([res]) => res)
}

module.exports = {
    getQuote,
    getSuperQuote
}