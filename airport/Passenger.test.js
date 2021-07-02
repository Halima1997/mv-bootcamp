const Passenger = require('./Passenger')
const Bag = require('./Bag')

describe('Passenger', () => {
    test('has a name', () => {
        const bag = new Bag(10)
        const halima = new Passenger("halima")
        const passenger = new Passenger(8);
        halima.addBag(bag);
        expect(halima.name).toEqual("halima")

        expect(passenger.name).toBe(halima);

    });

    test('does not have a name', () => {
        expect(() => new Passenger()).toThrowError('passenger must have a name');
    });

    test('has bags', () => {
        const yellowBag = new Bag(10);
        const pax1 = new Passenger('halima');

        pax1.addBag(yellowBag);
        console.log(pax1.bags);
    })
});