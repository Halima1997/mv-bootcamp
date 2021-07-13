const {sequelize, DataTypes, Model} = require('./sequelize_index');

class menu extends Model {


}
menu.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});

module.exports = {
    menu
};