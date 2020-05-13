const mongoose = require("mongoose");
var ObjectId = mongoose.Schema.Types.ObjectId;
module.exports = {
  roomId: {
    type: String,
    required: true,
    unique: true,
  },
  blockName: {
    type: String,
    required: true,
    unique: true,
  },
  roomNumber: {
    type: String,
    default: null,
  },
};
