
exports.up = function(knex) {
  return knex.schema.createTable('pantry_list', table => {
    table.increments()
    table.integer('pantry_id')
      .notNullable()
    table.integer('item_id')
      .notNullable()
    table.integer('quantity')
      .notNullable()
    table.string('description', 128)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('pantry_list')
};
