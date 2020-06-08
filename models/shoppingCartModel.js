const db = require('../data/dbConfig')

// Retrieve a shopping cart by id (internal use)
const getShoppingCartById = id => {
  return db('shopping_cart')
    .where({id})
    .first()
}

// Retrieve shopping carts by owner
const getShoppingCartsByOwner = owner => {
  return db('shopping_cart')
    .where({owner})
}

// Create a shopping cart
const addShoppingCart = async data => {
  const [id] = await db('shopping_cart')
    .insert(data)
    .returning('id')
  return getShoppingCartById(id)
}

// Update a shopping cart (not the items in it)
const updateShoppingCart = async (id, data) => {
  const [cartId] = await db('shopping_cart')
    .where({id})
    .first()
    .update(data)
    .returning('id')
  return getShoppingCartById(cartId)
}

// Delete a shopping cart
const deleteShoppingCart = id => {
  return db('shopping_cart')
    .where({id})
    .first()
    .del()
}

module.exports = {
  getShoppingCartsByOwner,
  addShoppingCart,
  updateShoppingCart,
  deleteShoppingCart
}