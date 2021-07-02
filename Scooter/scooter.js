class Scooter {
    batteryPercentage;
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
    if (!isBroken) {
        return true 
    } else {
        return false
    }
}
}
module.exports=Scooter
