const router = require("express").Router();
const Workout = require("../models/workout");

router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(workoutData => {
            res.json(workoutData);
        })
        .catch(err => {
            res.json(err);
        });
});