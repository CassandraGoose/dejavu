exports.up = function(knex, Promise) {
  return knex.schema.createTable('game', function(table) {
    table.increments('id');
    table.text('name').notNull();
    table.integer('score').notNull();
    table.dateTime("created_at").notNullable().defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('game')
};
