const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '24h' });
};

exports.hashPassword = async (password) => {
  return bcrypt.hash(password, 10);
};

exports.comparePasswords = async (candidatePassword, hashedPassword) => {
  return bcrypt.compare(candidatePassword, hashedPassword);
};