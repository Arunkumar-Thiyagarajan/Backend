const { validationResult } = require('express-validator');
const Workout = require('../models/workout.model');

exports.createWorkout = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const workout = new Workout({
      ...req.body,
      user: req.user._id
    });

    await workout.save();
    res.status(201).json(workout);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({ user: req.user._id })
      .sort({ date: -1 });
    res.json(workouts);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getWorkout = async (req, res) => {
  try {
    const workout = await Workout.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!workout) {
      return res.status(404).json({ message: 'Workout not found' });
    }

    res.json(workout);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateWorkout = async (req, res) => {
  try {
    const workout = await Workout.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!workout) {
      return res.status(404).json({ message: 'Workout not found' });
    }

    res.json(workout);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteWorkout = async (req, res) => {
  try {
    const workout = await Workout.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id
    });

    if (!workout) {
      return res.status(404).json({ message: 'Workout not found' });
    }

    res.json({ message: 'Workout deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};