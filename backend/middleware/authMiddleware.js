const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if no token
  if (!token) {
    return res.status(401).json({ 
      success: false,
      message: 'No token, authorization denied' 
    });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret');
    
    // Make sure decoded has user property
    if (!decoded.user || !decoded.user.id) {
      return res.status(401).json({
        success: false,
        message: 'Invalid token structure'
      });
    }
    
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ 
      success: false,
      message: 'Token is not valid' 
    });
  }
};