const express = require('express');
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  updateWorkout,
  deleteWorkout
} = require('../controllers/workout.controller');
const { workoutValidator } = require('../middleware/validators/workout.validator');

const router = express.Router();

router.post('/', workoutValidator, createWorkout);
router.get('/', getWorkouts);
router.get('/:id', getWorkout);
router.put('/:id', workoutValidator, updateWorkout);
router.delete('/:id', deleteWorkout);

module.exports = router;