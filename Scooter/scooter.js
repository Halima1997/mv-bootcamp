class Scooter {
    batteryPercentage;
    qrCode;
    isBroken=false

constructor(id) {
    if (!id) {
        throw new Error('must have an id');
    }
    this.id=id;
    this.isBroken = false


}
reportBroken () {
    isBroken = true 
}

charge () {
    if (!this.isBroken) {
        return true 
    } else {
        return false
    }
}
constructor(qrCode) {
    if (!qrCode) {
        throw new Error('must scan correct qr code ');
    }
    this.qrCode=qrCode;
    this.isBroken = false
}
reportBroken () {
    isBroken = true 
}

charge () {
    if (!this.isBroken) {
        return true 
    } else {
        return false  

}

module.exports=scooter 

