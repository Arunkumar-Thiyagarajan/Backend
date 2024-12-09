const { body } = require('express-validator');

exports.workoutValidator = [
  body('exercises.*.name')
    .notEmpty()
    .withMessage('Exercise name is required'),
  body('exercises.*.sets')
    .isInt({ min: 1 })
    .withMessage('Sets must be at least 1'),
  body('exercises.*.reps')
    .isInt({ min: 1 })
    .withMessage('Reps must be at least 1'),
  body('exercises.*.weight')
    .isNumeric()
    .withMessage('Weight must be a number')
];