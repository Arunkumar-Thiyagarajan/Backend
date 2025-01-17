const express = require('express');
const { register, login } = require('../controllers/auth.controller');
const { registerValidator, loginValidator } = require('../middleware/validators/auth.validator');

const router = express.Router();

router.post('/register', registerValidator, register);
router.post('/login', loginValidator, login);

module.exports = router;