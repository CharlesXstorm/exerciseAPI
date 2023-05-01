const express = require("express");

const Router = express.Router();

const {
  getExercises,
  getExerciseById,
  getbodyParts,
  getTargetMuscle,
  getEquipment,
} = require("../controller/exerciseController");

Router.route("/").get(getExercises);

Router.route("/bodyParts").get(getbodyParts);

Router.route("/:id").get(getExerciseById);

Router.route("/target/:target").get(getTargetMuscle);

Router.route("/equipment/:equipment").get(getEquipment);

module.exports = Router;
