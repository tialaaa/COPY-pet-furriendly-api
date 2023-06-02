// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  // DEV LOCAL
  // development: {
  //   client: 'pg',
  //   connection: {
  //     port: 5432,
  //     database: 'pet_furriendly_db',
  //     user:     'postgres',
  //     password: '~~~my password~~~' // UPDATE AS NEEDED
  //   }
  // },

  // PROD WITH RENDER's CONNECTION STRING
  development: {
    client: 'pg',
    connection: {
    connectionString: 'postgresql://postgres1:6VgF2qZGkAhiKpRmWC7nttNhKHpOPdb7@dpg-chslik2k728ud3k0vnig-a:5432/pet_furriendly_db',
      ssl: {
        rejectUnauthorized: false
      },
    },
    // pool: {
    //   min: 2,
    //   max: 10
    // },
    migrations: {
      directory: './migrations'
    }
  }
};


  // // DEV WITH RENDER's CONNECTION STRING - FOR TESTING
  // development: {
  //   client: 'pg',
  //   connection: {
  //   connectionString: 'postgresql://postgres1:6VgF2qZGkAhiKpRmWC7nttNhKHpOPdb7@dpg-chslik2k728ud3k0vnig-a:5432/pet_furriendly_db',
  //     ssl: {
  //       rejectUnauthorized: false
  //     },
  //   },
  //   // pool: {
  //   //   min: 2,
  //   //   max: 10
  //   // },
  //   migrations: {
  //     directory: './migrations'
  //   },
  // },


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