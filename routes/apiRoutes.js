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

router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        {
            $push: {
                exercises: body
            }
        },
        {
            new: true,
            runValidators: true
        }
    )
        .then(workoutData => {
            res.json(workoutData);
        })
        .catch(err => {
            res.json(err);
        });
});

router.delete("/api/workouts", ({ body }, res) => {
    Workout.findByIdAndDelete(
        body.id,

    )
        .then(() => {
            res.json(true);
        })
        .catch(err => {
            res.json(err);
        });
})

module.exports = router;


