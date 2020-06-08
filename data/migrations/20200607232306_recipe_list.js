
exports.up = function(knex) {
  return knex.schema.createTable('recipe_list', table => {
    table.increments()
    table.integer('recipe_id')
      .notNullable()
    table.integer('ingredient')
      .notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipe_list')
};
