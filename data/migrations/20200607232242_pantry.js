
exports.up = function(knex) {
  return knex.schema.createTable('pantry', table => {
    table.increments()
    table.integer('owner')
      .notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('pantry')
};
