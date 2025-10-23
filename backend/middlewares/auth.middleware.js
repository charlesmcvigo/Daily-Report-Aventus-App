const { verifyToken } = require('../utils/auth');
const User = require('../models/user.model');

async function requireAuth(req, res, next) {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized: No token found." });
    }

    let payload;
    try {
      payload = verifyToken(token);
    } catch (err) {
      return res.status(401).json({ message: "Unauthorized: Invalid or expired token." });
    }

    const user = await User.findById(payload.id);
    if (!user) {
      return res.status(401).json({ message: "Unauthorized: User not found." });
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(500).json({ message: "Internal server error." });
  }
}

module.exports = { requireAuth };
