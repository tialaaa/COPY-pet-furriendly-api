const knex = require('knex');
// const environment = 'development';
const environment = process.env.NODE_ENV || 'production';
const config = require('./knexfile')[environment];
const knexConfig = config[environment];

module.exports = knex(knexConfig);