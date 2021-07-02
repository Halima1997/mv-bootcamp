const Person = require('./Person')
const Bag = require('./Bag')


describe('person', () => {
    test('has a name',() => {
        const testPassenger = new Person ('halima')
        expect(testPassenger.getName()).toEqual('halima')

    })

    test('has bags', () => {
        const bag1 = new Bag(8)
        const testPassenger = new Person('halima')
        testPassenger.addBag(bag1)
        expect(testPassenger.getBags()).toContain(bag1)
    })
})

module.exports = Person
