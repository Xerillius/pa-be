const db = require('../data/dbConfig')

// Retrieve a shopping list by id (internal use)
const getShoppingListById = id => {
  return db('shopping_list')
    .where({id})
    .first()
}

// Retrieve a shopping list where owner = user.id
const getShoppingListsByOwner = owner => {
  return db('shopping_list')
    .where({owner})
}

// Create a shopping list
const addShoppingList = async data => {
  const [id] = await db('shopping_list')
    .insert(data)
    .returning('id')
  return getShoppingListById(id)
}

// Update a shopping list (not items inside the list)
const updateShoppingList = async (id, data) => {
  const [listId] = await db('shopping_list')
    .where({id})
    .first()
    .update(data)
    .returning('id')
  return getShoppingListById(listId)
}

// Delete a shopping list (delete all references to this list)
const deleteShoppingList = id => {
  return db('shopping_list')
    .where({id})
    .first()
    .del()
}

module.exports = {
  getShoppingListsByOwner,
  addShoppingList,
  updateShoppingList,
  deleteShoppingList
}