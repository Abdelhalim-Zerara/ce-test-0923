const expressAsyncHandler = require('express-async-handler');
const pool = require('../db');
require('dotenv').config();

const addStar = expressAsyncHandler(async function (req, res) {
  const { idMentor, idStudent } = req.body;

  try {
    // Insert the star into the "star" table
    await pool.query('INSERT INTO star ("idMentor", "idStudent") VALUES ($1, $2)', [idMentor, idStudent]);
    
    res.status(201).json({ message: 'Star added successfully' });
  } catch (error) {
    console.error('Error adding star', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const removeStar = expressAsyncHandler(async function (req, res) {
  const { idMentor, idStudent } = req.body;

  try {
    // Delete the star from the "star" table
    await pool.query('DELETE FROM star WHERE "idMentor" = $1 AND "idStudent" = $2', [idMentor, idStudent]);
    
    res.json({ message: 'Star removed successfully' });
  } catch (error) {
    console.error('Error removing star', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = { addStar, removeStar };