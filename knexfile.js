module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/city_park_tennis',
    migrations: {
      directory: './database/migrations'
    },
    useNullAsDefault: true
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + `?ssl=true`,
    migrations: {
      directory: './database/migrations'
    },
    useNullAsDefault: true
  }
}
