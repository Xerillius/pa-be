const db = require('../data/dbConfig.js')

const findAll = () => {
  return db('users')
}

const findUserById = async id => {
  const user = await db('users')
    .where({id})
    .first()
  return user
}

const findUserByUserName = async username => {
  const user = await db('users')
    .where({username})
    .first()
  return user
}

const addUser = async user_data => {
  const [id] = await db('users')
    .insert(user_data)
    .returning('id')
  return findUserById(id)
}

const editUser = async user_data => {
  // destructure user data
  data = {

  }
  const [id] = await db('users')
    .where({id: user_data.id})
    .update(data)
    .returning('id')
  return findUserById(id)
}

const deleteUser = id => {
  return db('users')
    .where({id})
    .del()
}

module.exports = {
  findAll,
  findUserById,
  findUserByUserName,
  addUser,
  editUser,
  deleteUser
}