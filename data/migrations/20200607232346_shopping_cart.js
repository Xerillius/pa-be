
exports.up = function(knex) {
  return knex.schema.createTable('shopping_cart', table => {
    table.increments()
    table.integer('owner')
      .notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('shopping_cart')
};
