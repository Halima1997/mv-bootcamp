const {sequelize, DataTypes, Model} = require('./sequelize_index');

class menuitem extends Model {


}
menuitem.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});

module.exports = {
    menuitem
};