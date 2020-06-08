const db = require('../data/dbConfig')

// Retrieve a list item by id (internal use)
const getListItemById = id => {
  return db('shopping_cart_list')
    .where({id})
    .first()
}

// Add a list item
const addListItem = async data => {
  const [id] = await db('shopping_cart_list')
    .insert(data)
    .returning('id')
  return getListItemById(id)
}

// Update a list item
const updateListItem = async (id, data) => {
  const [itemId] = await db('shopping_cart_list')
    .where({id})
    .first()
    .update(data)
    .returning('id')
  return getListItemById(itemId)
}

// Delete a list item
const deleteListItem = id => {
  return db('shopping_cart_list')
    .where({id})
    .first()
    .del()
}

module.exports = {
  addListItem,
  updateListItem,
  deleteListItem
}