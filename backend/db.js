const { Pool } = require('pg');
require('dotenv').config();


//Change to your local database
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
  });

// Test the database connection
pool.connect((err, client, release) => {
    if (err) {
      console.error('Error connecting to the database', err);
      return;
    }
    
    console.log('Connected to the database');
    release(); // Release the client back to the pool
  });


module.exports = pool;