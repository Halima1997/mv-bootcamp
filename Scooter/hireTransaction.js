class hireTransaction {


    constructor(registeredUser) {
        if(!registeredUser) {
            throw new Error('must be registered to hire'); 
        }
        this.registeredUser=registeredUser;
        console.log (registeredUser)
    }
}
module.exports=hireTransaction;