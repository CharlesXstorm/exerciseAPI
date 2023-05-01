const exerciseModel = require("../model/exerciseModel");
const bodyPartsModel = require("../model/bodyPartsModel");

exports.getExercises = async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );

    const dataDoc = await exerciseModel.find();

    res.status(200).json({
      response: "success",
      result: dataDoc.length,
      data: dataDoc,
    });
  } catch (err) {
    console.log(err.message);
  }
};

exports.getExerciseById = async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    const dataDoc = await exerciseModel.findById(req.params.id);

    res.status(200).json({
      status: "success",
      result: dataDoc.length,
      data: dataDoc,
    });
  } catch (err) {
    console.log(err.message);
  }
};

exports.getbodyParts = async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );

    const dataDoc = await bodyPartsModel.find();

    res.status(200).json({
      response: "success",
      result: dataDoc.length,
      data: dataDoc[0].data,
    });
  } catch (err) {
    console.log(err.message);
  }
};

exports.getTargetMuscle = async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );

    const dataDoc = await exerciseModel.find({ target: req.params.target });
    if (dataDoc.length == 0) {
      throw new Error("error");
    } else {
      res.status(200).json({
        status: "success",
        result: dataDoc.length,
        data: dataDoc,
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "The Endpoint does not exist",
    });
  }
};

exports.getEquipment = async (req, res) => {
  try {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );

    const dataDoc = await exerciseModel.find({
      equipment: req.params.equipment,
    });
    if (dataDoc.length == 0) {
      throw new Error("error");
    } else {
      res.status(200).json({
        status: "success",
        result: dataDoc.length,
        data: dataDoc,
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "The Endpoint does not exist",
    });
  }
};
