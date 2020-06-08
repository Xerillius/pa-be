const db = require('../data/dbConfig')

// Retrieve an item on the shopping list (internal use)
const getListItemById = id => {
  return db('shopping_list_items')
    .where({id})
    .first()
}

// Add an item to the shopping list
const addListItem = async data => {
  const [id] = await db('shopping_list_items')
    .insert(data)
    .returning('id')
  return getListItemById(id)
}

// Update an item on the shopping list
const updateListItem = async (id, data) => {
  const [itemId] = await db('shopping_list_items')
    .where({id})
    .first()
    .update(data)
    .returning('id')
  return getListItemById(itemId)
}

// Remove an item from the shopping list
const deleteListItem = id => {
  return db('shopping_list_items')
    .where({id})
    .first()
    .del()
}

module.exports = {
  addListItem,
  updateListItem,
  deleteListItem
}