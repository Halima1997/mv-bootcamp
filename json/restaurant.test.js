const {sequelize} = require('./sequelize_index');
const {restaurant} = require('./restaurant')

describe('Restaurant', () => {
    
    beforeAll(async () => {
        
        await sequelize.sync({ force: true });
    })

    test('can create a restaurant', async () => {
        const restaurants = await restaurant.create({ name: 'Ronalds', image: 'http://some.image.url' })
        expect(restaurants.id).toBe(1)
    })
})