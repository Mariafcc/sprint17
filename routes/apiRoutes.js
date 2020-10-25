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


router.get("/api/workouts", (req, res) => {
    Workout.find()
        .then(workoutData => {
            res.json(workoutData);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(8)
        .then(workoutData => {
            res.json(workoutData);
        })
        .catch(err => {
            res.json(err);
        });
});
