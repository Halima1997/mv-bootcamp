const Passenger = require('./Passenger')

describe('Passenger', function() {
    test('has a number', function() {
        const passenger = new Passenger(8);
        expect(passenger.number).toBe(8);

    });

    test('does not have a number', function (){
        expect(() => new Passenger()).toThrowError('passenger must have a number');
    });
});