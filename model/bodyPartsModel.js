const mongoose = require("mongoose");

const bodyPartsSchema = new mongoose.Schema({
  data: {
    type: Array,
  },
});

const bodyPartsModel = mongoose.model("bodyParts", bodyPartsSchema);

module.exports = bodyPartsModel;
