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
                required: "Workout Selection required"
            },
            duration: {
                type: Number,
                required: "Duration required",
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
            }
        }
    ],

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;