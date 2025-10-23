// backend/utils/auth.js
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;
const EXPIRY = process.env.JWT_EXPIRY || '3d';


function signToken(payload) {
  // payload should be minimal: { id, email }
  return jwt.sign(payload, SECRET, { expiresIn: EXPIRY });
}

function verifyToken(token) {
  // throws if invalid or expired
  return jwt.verify(token, SECRET);
}

module.exports = { signToken, verifyToken };
