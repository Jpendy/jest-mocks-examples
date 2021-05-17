const { getQuote, getSuperQuote } = require("../services/fetches")
import { rest } from 'msw';
import { setupServer } from 'msw/node'
const fetch = require('node-fetch')
const request = require('superagent')


// jest mock mocking fetch api's way
jest.mock('node-fetch')
jest.mock('superagent')

//msw server way of mocking, remember to start and close server, example below in describe block
const server = setupServer(
    rest.get('https://futuramaapi.herokuapp.com/api/quotes/1', (req, res, ctx) => {
        return res(
            ctx.json([{
                character: 'Fry',
                quote: 'whatever man',
                image: 'imageurl'
            }])
        )
    })
)

//jest mock call back way, mocking file path, if single function in file
jest.mock('../services/fetchCharacters', () => () => [{ character: 'Fry', quote: 'whatever man', image: 'imageurl' }])

//jest mock call back way, mocking file path, if multiple functions in file
jest.mock('../services/fetches', () => ({
    fetchQuotes: () => [{ character: 'Fry', quote: 'whatever man', image: 'imageurl' }],
    fetchCharacter: () => ({ character: 'Fry', quote: 'whatever man', image: 'imageurl' })
}))

describe('node-fetch mock and superagent mock', () => {
    beforeAll(() => server.listen())
    afterAll(() => server.close())


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

        const res = await getSuperQuote()

        expect(res).toEqual({
            character: expect.any(String),
            image: expect.any(String),
            quote: expect.any(String),
        })

    })
})