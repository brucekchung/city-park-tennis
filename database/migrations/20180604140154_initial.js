exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('players', table => {
      table.increments('id').primary()
      table.string('name')
      table.string('number')
      table.string('email')
      table.date('attendance')

      table.timestamps(true, true)
    })
  ])
}

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('players'),
  ])
}


