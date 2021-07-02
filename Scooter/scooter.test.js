const Scooter = require('./scooter')

describe('Scooter', function() {
    test('is fully charged', function() {
        const scooter = new Scooter(1);
        expect(scooter.charge()).toBeTruthy();

    });

    
});