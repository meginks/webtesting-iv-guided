const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(hobbit) {
  const id = await db('hobbits').insert(hobbit, 'id') 
  return db('hobbits')
  .where({id}) 
  .first()
} 
/// POSTGRES IS DIFFERENT FROM SQLITE -- postgres gives us a 0 or a 1 instead of an id like sqlite. you must add a second parameter into insert function so it will find the id on the object

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db('hobbits');
}

function findById(id) {
  return null;
}
