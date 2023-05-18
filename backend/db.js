const { Pool } = require('pg');


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'consteldb',
    password: 'Zehalim#5',
    port: 5432
  });
  

// Test the database connection
pool.query('SELECT 1')
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database', error);
});


