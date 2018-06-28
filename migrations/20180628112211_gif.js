exports.up = function (knex, Promise) {
  return knex.schema.createTable('gif', (table) => {
    table.increments()
    table.text('gifUrl')
    table.text('description')
  })
}

// express knex 4 lyfe

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('gif')
}