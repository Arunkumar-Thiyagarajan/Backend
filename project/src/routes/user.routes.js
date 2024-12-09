const express = require('express');
const { updateProfile, getProfile } = require('../controllers/user.controller');
const { updateProfileValidator } = require('../middleware/validators/user.validator');

const router = express.Router();

router.get('/profile', getProfile);
router.put('/profile', updateProfileValidator, updateProfile);

module.exports = router;