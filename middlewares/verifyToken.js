const jwt = require('jsonwebtoken');

// Middleware function to verify token from cookies
const verifyToken = (req, res, next) => {
  // Get the token from the cookies
  const token = req.cookies?.token; // Assumes the cookie is named 'token'

  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: 'Access Denied: No Token Provided' });
  }

  try {
    // Verify the token
    const secretKey = process.env.JWT_SECRET;
    const decoded = jwt.verify(token, secretKey);
    // Attach user information to the request object
    req.user = decoded;
    // Call next middleware or route handler
    next();
  } catch (error) {
    // Handle invalid token
    return res.status(403).json({ message: 'Invalid Token' });
  }
};

module.exports = verifyToken;
