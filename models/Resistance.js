const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResistanceSchema = new Schema({
  exerciseName: {
    type: String,
    trim: true,
    required: "Workout Name required"
  },

  weight: {
    type: Number,
    required: true
  },

  sets: {
    type: Number,
    required: true
  },

  reps: {
    type: Number,
    required: true
  },

  resistanceDuration: {
      type: Number
  }

});

const Resistance = mongoose.model("Resistance", ResistanceSchema);

module.exports = Resistance;