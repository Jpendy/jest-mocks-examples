const { getQuote, getSuperQuote } = require("../services/fetches")
const fetch = require('node-fetch')
const request = require('superagent')

jest.mock('node-fetch')
jest.mock('superagent')

describe('node-fetch mock and superagent mock', () => {

    it('node-fetch mock', async () => {

        fetch.mockResolvedValue({
            json: () => [{
                character: 'fry',
                quote: 'You didn\'t hurt me, but you wanted to. That\'s the important thing.',
                image: "https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904133/fry.png"
            }]
        })

        const res = await getQuote()

        expect(res).toEqual({
            character: expect.any(String),
            image: expect.any(String),
            quote: expect.any(String),
        })

    })


    it('superagent mock', async () => {

        request.get.mockResolvedValue({
            body: [{
                character: 'fry',
                quote: 'You didn\'t hurt me, but you wanted to. That\'s the important thing.',
                image: "https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904133/fry.png"
            }]
        })

        const [res] = await getSuperQuote()

        expect(res).toEqual({
            character: expect.any(String),
            image: expect.any(String),
            quote: expect.any(String),
        })

    })
})