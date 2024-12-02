const jwt = require('jsonwebtoken');
require('dotenv').config();

/**
 * Middleware to verify JWT token.
 * Checks for the token in the Authorization header and verifies it.
 * If valid, attaches the user data to `req.user` and allows access.
 *
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 * @param {function} next - Express next middleware function
 */
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Get token from Bearer scheme

    if (!token) {
        return res.status(401).json({ message: 'Access denied, token missing' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
        req.user = decoded; // Attach decoded user info to req.user
        next();
    } catch (err) {
        res.status(403).json({ message: 'Invalid token' });
    }
}

module.exports = authenticateToken;
