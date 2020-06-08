const db = require('../data/dbConfig')

const findFoodById = id => {
  return db('food_items')
    .where({id})
}

const findFoodByName = name => {
  return db('food_items')
    .where({name})
}

const findFoodByType = type => {
  return db('food_items')
    .where({type})
}

const addFoodItem = async data => {
  const [id] = await db('food_items')
    .insert(data)
    .returning('id')
  return findFoodById
}

const editFoodItem = async (id, data) => {
  const [id] = await db('food_items')
    .where({id})
    .update(data)
    .returning('id')
  return findFoodById(id)
}

const deleteFoodItem = id => {
  return db('food_items')
    .where({id})
    .del()
}

module.exports = {
  findFoodById,
  findFoodByName,
  findFoodByType,
  addFoodItem,
  editFoodItem,
  deleteFoodItem
}