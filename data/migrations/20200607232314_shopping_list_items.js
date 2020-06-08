
exports.up = function(knex) {
  return knex.schema.createTable('shopping_list_items', table => {
    table.increments()
    table.integer('food_item')
      .notNullable()
    table.integer('shopping_list')
      .notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('shopping_list_items')
};
