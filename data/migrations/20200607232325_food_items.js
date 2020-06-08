
exports.up = function(knex) {
  return knex.schema.createTable('food_items', table => {
    table.increments()
    table.string('name')
      .notNullable()
    table.string('type')
      .notNullable()
    table.string('size_tag')
      .notNullable()
    table.float('size_num')
      .defaultTo(0.0)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('food_items')
};
