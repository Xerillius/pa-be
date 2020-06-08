
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments()
    table.string('username', 24)
      .notNullable()
    table.string('password', 24)
      .notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
