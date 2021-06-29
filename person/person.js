
const charles = {
    firstName: 'Charles',
    lastName: 'Windsor',
    parents: []
}

const diana = {
    firstName: 'Diana',
    lastName: 'Wales',
    parents: []
}

const harry = {
    firstName: 'Harry',
    lastName: 'Windsor',
    parents: [charles, diana],
    childOf: function () {
        return this.parents.map(parent => parent.firstName).join(' & ') || "unknown"
    }
}

// console.log(harry.childOf()) 

module.exports = {harry, diana, charles}