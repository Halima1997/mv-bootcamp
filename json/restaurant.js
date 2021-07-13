const { menu } = require('./menu');
const {sequelize, DataTypes, Model} = require('./sequelize_index');

restaurant.hasMany(menu, {as: 'menus', foreignKey: 'restaurant_id'})
menu.belongsTo(restaurant, {foreignKey: 'restaurant_id'})

class restaurant extends Model {


}
restaurant.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,


});

module.exports = {
    restaurant
};