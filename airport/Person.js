const Person = require('./Person')
const Bag = require('./Bag')
const { TestWatcher } = require('jest')

describe('passenger', () => {
    test('name', () => {
        const testPassenger = new Person('a')
        expect(testPassenger.getName()),toEqual('a')
    })
    
    test('bags', () => {
        const bag1 = new Bag(10)
        const testPassenger = new Person('a')
        testPassenger.addBag(bag1)
        expect(testPassenger.getBags()).toContain(bag1)
    })

})