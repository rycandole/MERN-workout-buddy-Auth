const express = require('express')
// const Workout = require('../models/workoutModel')

const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout
} = require('../controllers/workoutControllers')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)

// GET all workouts
router.get('/', getWorkouts)

// GET all single
router.get('/:id', getWorkout)

// POST new workout
router.post('/', createWorkout)

// DELETE new workout
router.delete('/:id', deleteWorkout)

// UPDATE new workout
router.patch('/:id', updateWorkout)

module.exports = router