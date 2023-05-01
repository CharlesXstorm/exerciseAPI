const Path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: Path.join(`${__dirname}/../config.env`) });

const mongoose = require("mongoose");

const model = require("../model/exerciseModel");
const Bodymodel = require("../model/bodyPartsModel");

const { exercise } = require("../data/allExercises");
const { bodyParts } = require("../data/bodyParts");
// const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`Database connected successfully!!`);
  });

const importFunc = async () => {
  try {
    await Bodymodel.create(bodyParts);
    console.log("Imported successfully!!");
    process.exit();
  } catch (err) {
    console.log(err.message);
  }
};

const deleteFunc = async () => {
  try {
    await Bodymodel.deleteMany();
    console.log("Deleted successfully!!");
    process.exit();
  } catch (err) {
    console.log(err.message);
  }
};

// if (process.argv[2] === "--import") {
//   importFunc();
// } else {
//   deleteFunc();
// }

switch (process.argv[2] === "--import") {
  case true:
    return importFunc();
  case false:
    return deleteFunc();
  default:
    return;
}
