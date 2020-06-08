const db = require("../data/dbConfig")

// Retrieve pantry with list of items by user.id
const findPantryByOwner = async id => {
  const [pantry_id] = await db('pantry')
    .where({owner: id})
    .select('id')
  return findPantryById(pantry_id)
}

// Retrieve pantry with list of items by pantry.id
const findPantryById = async id => {
  let pantry = await db('pantry')
    .where({id})
  return pantry
}

// Create a pantry where id = user.id
const addPantry = async id => {
  const [id] = db('pantry')
    .insert({owner: id})
    .returning('id')
  return findPantryById
}

// Delete a pantry
const deletePantry = id => {
  return db('pantry')
    .where({id})
    .del()
}

module.exports = {
  findPantryByOwner,
  findPantryById,
  addPantry,
  deletePantry
}