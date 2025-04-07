import React, { useState } from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [stage, setStage] = useState('request');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') setPhone(value);
    if (name === 'otp') setOtp(value);
    if (name === 'newPassword') setNewPassword(value);
  };

  const handleRequestOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone })
      });
      const result = await response.json();
      alert(result);
      setStage('verify');
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong.');
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, otp, newPassword })
      });
      const result = await response.json();
      alert(result);
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong.');
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      {stage === 'request' && (
        <form onSubmit={handleRequestOtp}>
          <label htmlFor="phone">Mobile Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={handleChange}
            required
          />
          <button type="submit">Request OTP</button>
        </form>
      )}
      {stage === 'verify' && (
        <form onSubmit={handleVerifyOtp}>
          <label htmlFor="otp">OTP:</label>
          <input
            type="text"
            id="otp"
            name="otp"
            value={otp}
            onChange={handleChange}
            required
          />
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={newPassword}
            onChange={handleChange}
            required
          />
          <button type="submit">Verify OTP & Reset Password</button>
        </form>
      )}
    </div>
  );
};

export default ForgotPassword;
