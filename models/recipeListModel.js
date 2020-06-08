const db = require('../data/dbConfig')

const getListItemById = id => {
  return db('recipe_list')
    .where({id})
}

const addListItem = async data => {
  const [id] = await db('recipe_list')
    .insert(data)
    .returning('id')
  return getListItemById(id)
}

const updateListItem = async (id, data) => {
  const [itemId] = await db('recipe_list')
    .where({id})
    .first()
    .update(data)
    .returning('id')
  return getListItemById(itemId)
}

const deleteListItem = id => {
  return db('recipe_list')
    .where({id})
    .first()
    .del()
}

module.exports = {
  addListItem,
  updateListItem,
  deleteListItem
}