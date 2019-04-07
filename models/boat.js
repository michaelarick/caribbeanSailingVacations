const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boatSchema = new Schema({
  boatName: { type: String, required: true },
  imgs: { type: [String], required: true },
  year: { type: Number, required: true },
  maxPassengers: { type: Number, required: true },
  manufacture: {type: String, required: true},
  crewBio: {type: String, required: true}
});

const Boat = mongoose.model("Boats", boatSchema);

module.exports = Boat;
