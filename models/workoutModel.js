const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Type of Workout Required"
            },
            name: {
                type: String,
                trim: true,
                required: "Workout Name required"
            },
            duration: {
                type: Number,
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number,
            },
        },
        {strict: false},
    ],
}, {strict: false});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;