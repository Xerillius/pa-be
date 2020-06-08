const db = require('../data/dbConfig')

const getRecipeById = id => {
  return db('recipes')
    .where({id})
}

const getRecipesByOwner = owner => {
  return db('recipes')
    .where({owner})
}

const getRecipeByName = name => {
  return db('recipes')
    .where({name})
}

const addRecipe = async data => {
  const [id] = await db('recipes')
    .insert(data)
    .returning('id')
  return getRecipeById(id)
}

const updateRecipe = async (id, data) => {
  const [id] = await db('recipes')
    .where({id})
    .first()
    .update(data)
    .returning('id')
  return getRecipeById(id)
}

const deleteRecipe = id => {
  return await db('recipes')
    .where({id})
    .first()
    .del()
}


module.exports = {
  getRecipeById,
  getRecipesByOwner,
  getRecipeByName,
  addRecipe,
  updateRecipe,
  deleteRecipe
}