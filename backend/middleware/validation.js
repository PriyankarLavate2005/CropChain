const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  return password && password.length >= 6;
};

const validateOTP = (otp) => {
  return otp && otp.length === 6 && /^\d+$/.test(otp);
};

// Middleware to validate forgot password request
const validateForgotPassword = (req, res, next) => {
  const { email } = req.body;
  
  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }
  
  if (!validateEmail(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }
  
  next();
};

// Middleware to validate reset password request
const validateResetPassword = (req, res, next) => {
  const { email, otp, newPassword } = req.body;
  
  if (!email || !otp || !newPassword) {
    return res.status(400).json({ 
      message: 'Email, OTP, and new password are required.' 
    });
  }
  
  if (!validateEmail(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }
  
  if (!validateOTP(otp)) {
    return res.status(400).json({ message: 'OTP must be 6 digits' });
  }
  
  if (!validatePassword(newPassword)) {
    return res.status(400).json({ 
      message: 'Password must be at least 6 characters long.' 
    });
  }
  
  next();
};

module.exports = {
  validateForgotPassword,
  validateResetPassword
};