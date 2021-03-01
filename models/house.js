const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const houseSchema = new Schema({
  members: {
    type: Number,
    required: true
  },
  bhk: {
    type: Number,
    required: true
  },
  owner: {
    type: String,
    required: true
  }
});

const houseModel = mongoose.model('House', houseSchema);
module.exports = houseModel;
