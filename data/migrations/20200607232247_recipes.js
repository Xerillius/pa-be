
exports.up = function(knex) {
  return knex.schema.createTable('recipes', table => {
    table.increments()
    table.integer('owner')
      .notNullable()
    table.string('name')
      .notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipes')
};
