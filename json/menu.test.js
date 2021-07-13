const {sequelize} = require('./sequelize_index');
const {menu} = require('./menu')

describe('menu', () => {
    
    beforeAll(async () => {
        
        await sequelize.sync({ force: true });
    })

    test('can create a menu', async () => {
        const menus = await menu.create({ name: 'Ronalds', image: 'http://some.image.url' })
        expect(menus.id).toBe(1)
    })
})