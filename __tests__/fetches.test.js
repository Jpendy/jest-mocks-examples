const { getQuote } = require("../services/fetches")
const fetch = require('node-fetch')
jest.mock('node-fetch')

describe('it mocks the fetch and tests it', () => {

    it('test', async () => {

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


})