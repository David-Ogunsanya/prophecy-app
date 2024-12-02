const express = require('express');
const pool = require('../db')
const router = express.Router();

//GET /verses: Retrieve all verses
router.get('/', async (req, res)=> {
    try {
        const query= `
        SELECT Daniel_7.id, Daniel_7.verse, Daniel_7.notes, books.name AS
        FROM Daniel_7
        LEFT JOIN books on Daniel_7.book_id = books.id
        `;
        const result = await pool.query(query);
        res.json(result.rows);
    }   catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Server error'});
    }
});


// 2. GET /verses/:id: Retrieve a specific verse by ID

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const query= `
        SELECT Daniel_7.id, Daniel_7.verse, Daniel_7.notes, books.name AS
        FROM Daniel_7
        LEFT JOIN books on Daniel_7.book_id = books.id
        WHERE Daniel_7.i = $1
        `;
        const result = await pool.query(query, [id]);
        if (result.rows.length === 0 ) {
            return res.status(404).json({ error: 'Verse not found'});
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Server error'})
    }
});


// 3. POST /verses: Add a new verse
router.post('/', async (req, res) => {
    const { verse, notes, book_id } = req.body;
    try {
      const query = `
        INSERT INTO Daniel_7 (verse, notes, book_id)
        VALUES ($1, $2, $3)
        RETURNING *
      `;
      const result = await pool.query(query, [verse, notes, book_id]);
      res.status(201).json(result.rows[0]);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Server error' });
    }
});
  
  // 4. PUT /verses/:id: Update a specific verse by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { verse, notes, book_id } = req.body;
    try {
      const query = `
        UPDATE Daniel_7
        SET verse = $1, notes = $2, book_id = $3
        WHERE id = $4
        RETURNING *
      `;
      const result = await pool.query(query, [verse, notes, book_id, id]);
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Verse not found' });
      }
      res.json(result.rows[0]);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Server error' });
    }
});
  
  // 5. DELETE /verses/:id: Delete a specific verse by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const query = `
        DELETE FROM Daniel_7
        WHERE id = $1
        RETURNING *
      `;
      const result = await pool.query(query, [id]);
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Verse not found' });
      }
      res.json({ message: 'Verse deleted successfully' });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
module.exports = router;
