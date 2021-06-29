const people = require('./person')

describe('Family tree test suite', () => {

    test('harrys mother', () => {
        expect(people.diana.firstName).toEqual("Diana")
    })
})
