const {sequelize} = require('./sequelize_index');
const {menuitem} = require('./menuitem')

describe('menu', () => {
   
    beforeAll(async () => {
        
        await sequelize.sync({ force: true });
    })

    test('can create a menu', async () => {
        const menuitems = await menuitem.create({ name: 'Ronalds', image: 'http://some.image.url' })
        expect(menuitems.id).toBe(1)
    })
})