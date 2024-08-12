export const development = {
  client: 'pg',
  connection: 'postgresql://localhost/todos_test',
  migrations: {
    directory: __dirname + '/db/migrations',
  },
  seeds: {
    directory: __dirname + '/db/seeds',
  },
}
export const production = {
  client: 'pg',
  connection: Process.env.DATABASE_URL,
  migrations: {
    directory: __dirname + '/db/migrations',
  },
  seeds: {
    directory: __dirname + '/db/seeds/production',
  },
}
