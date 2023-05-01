const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  bodyPart: {
    type: String,
    require: [true, "Exercise must have a body part"],
  },
  equipment: {
    type: String,
    trim: true,
  },
  gifUrl: {
    type: String,
    require: [true, "gifUrl must be present"],
  },
  id: {
    type: String || Number,
  },
  name: {
    type: String,
    trim: true,
    require: [true, "A name must be present"],
  },
  target: {
    type: String,
  },
});

const exerciseModel = mongoose.model("exercise", exerciseSchema);

module.exports = exerciseModel;
