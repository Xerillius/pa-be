
exports.up = function(knex) {
  return knex.schema.createTable('shopping_cart_list', table => {
    table.increments()
    table.integer('shopping_cart')
      .notNullable()
    table.integer('food_item')
      .notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('shopping_cart_list')
};
