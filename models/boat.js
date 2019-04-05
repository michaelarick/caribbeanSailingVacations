const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boatSchema = new Schema({
  boatName: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true }
});

const Boat = mongoose.model("Boats", boatSchema);

module.exports = Boat;
