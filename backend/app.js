// Import dependencies
const express = require('express');
const db = require('./config/db');
require('dotenv').config();
const Joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authenticateToken = require('./middleware/auth');
const bodyParser = require('body-parser');


// Initialize the Express application
const app = express();
app.use(bodyParser.json()); // Enable JSON parsing for incoming requests

// Define bcrypt salt rounds
const saltRounds = 10;

// Joi schemas for validation
const verseSchema = Joi.object({
    verse_reference: Joi.string().required(),
    verse_text: Joi.string().required(),
    meaning: Joi.string().required(),
});

const loginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
});

// Middleware for validating request body
function validate(schema) {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        next();
    };
}

// ROUTES

/**
 * Test Endpoint
 * GET /api/test - Check server and database connection
 */
app.get('/api/test', async (req, res) => {
    try {
        const result = await db.query('SELECT NOW()');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

/**
 * Public Endpoint to Get All Verses
 * GET /api/public-verses - Accessible without authentication
 */
app.get('/api/public-verses', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM Daniel_7');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

/**
 * JWT-Protected Endpoint to Get All Verses
 * GET /api/verses - Requires authentication
 */
app.get('/api/verses', authenticateToken, async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM Daniel_7');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

/**
 * Create a New Verse
 * POST /api/verses - Requires authentication
 */
app.post('/api/verses', authenticateToken, validate(verseSchema), async (req, res) => {
    const { verse_reference, verse_text, meaning } = req.body;
    try {
        const result = await db.query(
            'INSERT INTO Daniel_7 (verse, notes, symbol) VALUES ($1, $2, $3) RETURNING *',
            [verse_reference, verse_text, meaning]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

/**
 * Update a Verse
 * PUT /api/verses/:id - Requires authentication
 */
app.put('/api/verses/:id', authenticateToken, validate(verseSchema), async (req, res) => {
    const { id } = req.params;
    const { verse_reference, verse_text, meaning } = req.body;
    try {
        const result = await db.query(
            'UPDATE Daniel_7 SET verse = $1, notes = $2, symbol = $3 WHERE id = $4 RETURNING *',
            [verse_reference, verse_text, meaning, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Verse not found' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

/**
 * Delete a Verse
 * DELETE /api/verses/:id - Requires authentication
 */
app.delete('/api/verses/:id', authenticateToken, async (req, res) => {
    const { id } = req.params;
    try {
        const result = await db.query('DELETE FROM Daniel_7 WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Verse not found' });
        }
        res.json({ message: 'Verse deleted successfully', verse: result.rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

/**
 * User Registration
 * POST /api/register
 */
app.post('/api/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if the user already exists
        const userExists = await db.query('SELECT * FROM users WHERE username = $1', [username]);
        if (userExists.rows.length > 0) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Insert the new user
        const result = await db.query(
            'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
            [username, hashedPassword]
        );

        res.status(201).json({ message: 'User registered successfully', user: result.rows[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

/**
 * User Login
 * POST /api/login
 */
app.post('/api/login', validate(loginSchema), async (req, res) => {
    const { username, password } = req.body;

    try {
        const result = await db.query('SELECT * FROM users WHERE username = $1', [username]);
        if (result.rows.length === 0) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const user = result.rows[0];
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.json({ message: 'Login successful', token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Start the server
const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
