const {sequelize} = require('./sequelize_index');
const {restaurant} = require('./restaurant');
const {menu} = require('./menu');
const {menuitem} = require('./menuitem')


describe('relationships', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    })
    
    test('restaurants have menus', async () => {
        const restaurant = await Restaurant.create({name: 'Ronalds', image: 'http://some.image.url'})
        const menu = await Menu.create({title: 'set 1'});
        await restaurant.addMenu(menu);
        const menus = await restaurant.getMenus();
        expect(menus[0].title).toBe('set 1');
    })

})