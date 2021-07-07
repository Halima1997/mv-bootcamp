const Scooter = require('./scooter')

describe('Scooter', function() {
    test('is fully charged', function() {
        const scooter = new Scooter(1, 2);
        expect(scooter.charge()).toBeTruthy();

    })


    test('correct qr code', function() {
        const scooter = new Scooter(1, 2);
        expect(scooter.qrCode).toBe(2);
    
    });

    test('incorrect id', function() {
        expect(() => new Scooter ()).toThrowError('must have an id');

    });


})
