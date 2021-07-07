const hireTransaction = require('./hireTransaction');

describe('hireTransaction', function() {
    test('is a registered user', function() {
        const myHireTransaction = new hireTransaction(true);
        expect(myHireTransaction.registeredUser).toBeTruthy();

    });

    test('is not a registered user', function (){
        expect(() => new hireTransaction(false)).toThrowError('must be registered to hire');
    });
});