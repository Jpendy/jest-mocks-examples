const { filter, map } = require("../utils/methods")


describe('methods', () => {

    it('filter method', () => {

        const res = filter([3, 4, 5, 7, 11, 8], item => item % 2 === 0)

        expect(res).toEqual([4, 8])

    })


    it('map method', () => {

        const array = ['black', 'red', 'yellow', 'green']

        const res = map(array, (item, i, arr) => `${item} is index ${i}`)

        expect(res).toEqual(["black is index 0", "red is index 1", "yellow is index 2", "green is index 3"])

    })
})