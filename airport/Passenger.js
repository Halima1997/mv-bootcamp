class Passenger {
    number;

constructor(number) {
    if (!number) {
        throw new Error('passenger must have a number');
    }
    this.number=number;
}
}



module.exports = Passenger;