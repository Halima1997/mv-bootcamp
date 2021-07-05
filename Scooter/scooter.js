class Scooter {
    batteryPercentage;
    qrCode;
    isBroken = false

    constructor(id, qrCode) {
        if (!id) {
            throw new Error('must have an id');

        }
        this.id = id;
        if (!qrCode) {
            throw new Error('must scan correct qr code ');
        }
        this.qrCode = qrCode;

        this.isBroken = false


    }
    reportBroken() {
        isBroken = true
    }

    charge() {
        if (!this.isBroken) {
            return true
        } else {
            return false
        }
    }

    reportBroken() {
        isBroken = true
    }

    charge() {
        if (!this.isBroken) {
            return true
        } else {
            return false
        }

    }
}

module.exports = Scooter

