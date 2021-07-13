const { menu } = require('./menu');
const {sequelize, DataTypes, Model} = require('./sequelize_index');


class restaurant extends Model {


}
restaurant.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,


});

module.exports = Restaurant
