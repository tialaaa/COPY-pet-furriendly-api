// Update with your config settings.

// /**
//  * @type { Object.<string, import("knex").Knex.Config> }
//  */
module.exports = {

  // development: {
  //   client: 'pg',
  //   connection: {
  //     port: 5432,
  //     database: 'pet_furriendly_db',
  //     user:     'postgres',
  //     password: 'Dinglebop22'
  //   }
  // },

  development: {
    client: 'pg',
    connection: {
    // connectionString: process.env.DATABASE_URL,
    connectionString: 'postgresql://postgres1:6VgF2qZGkAhiKpRmWC7nttNhKHpOPdb7@dpg-chslik2k728ud3k0vnig-a:5432/pet_furriendly_db',
      ssl: {
        rejectUnauthorized: false
      },
    },
    // pool: {
    //   min: 2,
    //   max: 10
    // },
    // migrations: {
    //   tableName: 'knex_migrations'
    // }
    migrations: {
      directory: './migrations'
    },
    // seeds: {
    //   directory: './seeds'
    // },
  },

  production: {
    client: 'pg',
    connection: {
    // connectionString: process.env.DATABASE_URL,
    connectionString: 'postgresql://postgres1:6VgF2qZGkAhiKpRmWC7nttNhKHpOPdb7@dpg-chslik2k728ud3k0vnig-a:5432/pet_furriendly_db',
      ssl: {
        rejectUnauthorized: false
      },
    },
    // pool: {
    //   min: 2,
    //   max: 10
    // },
    // migrations: {
    //   tableName: 'knex_migrations'
    // }
    migrations: {
      directory: './migrations'
    }
  }

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

};
