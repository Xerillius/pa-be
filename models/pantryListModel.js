const db = require('../data/dbConfig')

const findListItemById = id => {
  return db('pantry_list')
    .where({id})
}

const addListItem = async data => {
  const [id] = await db('pantry_list')
    .insert(data)
    .returning('id')
  return findListItemById(id)
}

const deleteListItem = id => {
  return db('pantry_list')
    .where({id})
    .del()
}

module.exports = {
  addListItem,
  deleteListItem
}