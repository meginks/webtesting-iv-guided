const hobbitsDB = require('./hobbitsModel.js');
const db = require('../data/dbConfig.js');
describe('hobbits model', () => {
    afterEach(async () => {
        await db('hobbits').truncate()
    })
    describe('insert()', () => {
        it('should insert the provided hobbits into the db', async () => {
            await hobbitsDB.insert({ name: 'gaffer'})
            await hobbitsDB.insert({name: 'sam'}) 

            const hobbits = await db('hobbits'); 
            expect(hobbits).toHaveLength(2); 
        }) 

        it('should insert the provided hobbit into the db', async () => {
          let hobbit = await hobbitsDB.insert({ name: 'gaffer'}) 
          expect (hobbit.name).toBe('gaffer')

          hobbit = await hobbitsDB.insert({ name: 'Sam'})
          expect('hobbit.name').toBe('Sam')
        })
    })
})