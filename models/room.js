const mongoose= require("mongoose");

const Schema = mongoose.Schema;

const roomSchema = new Schema({
  length: {
    type: Number,
    required: true
  },
  breadth: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  house: {
      type: mongoose.Types.ObjectId,
      ref: "House"
    }
});

const roomModel = mongoose.model('Room', roomSchema);
module.exports=roomModel;
