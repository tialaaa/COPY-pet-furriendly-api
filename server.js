const express = require('express');
const app = express();
const cors = require('cors');
// const knex = require('./knex');
// const environment = process.env.NODE_ENV || 'production';
const environment = 'production';
const configuration = require('./knexfile')[environment];
const knex = require('knex')(configuration);
// const knex = require('knex')({client: 'pg'});

app.set('port', process.env.PORT || 443);

app.use(cors());

app.get('/api/v1/places', async (request, response) => {
  try {
    const places = await knex.select().from('places');
    response.status(200).json(places);
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(app.get('port'), () => {

  console.log(`server has started on port 443`);
  console.log('knex configuration', configuration);
  console.log('node environment', environment)
});