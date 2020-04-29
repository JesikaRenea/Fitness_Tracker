const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardioSchema = new Schema({
  cardioName: {
    type: String,
    trim: true,
    required: "Workout Selection required"
  },

  distance: {
    type: Number,
    required: true
  },
  
  cardioDuration: {
    type: Number,
    required: true
  }

});

const Cardio = mongoose.model("Cardio", CardioSchema);

module.exports = Cardio;