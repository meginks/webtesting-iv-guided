// Update with your config settings.
localPgConnection = {
  host: 'localhost', 
  database: 'hobbits',
  user: 'me', 
  password: 'password'
} // this is a dummy version of this and it won't actually work but it's there so it won't crash


const prodDbConnection = process.env.DATABASE_URL || localPgConnection;


module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/hobbits.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/test.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: prodDbConnection, // an object or a string
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    }
  }
};
