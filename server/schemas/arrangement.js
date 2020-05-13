const mongoose = require("mongoose");
var ObjectId = mongoose.Schema.Types.ObjectId;

module.exports = {
  roomId: {
    type: String,
    required: true,
    unique: true,
  },
  facultyName: {
    type: String,
    required: true,
    unique: true,
  },
  roomDetail: {
    type: ObjectId,
    ref: "classroom",
  },
  startDate: {
    type: String,
    default: Date.now(),
  },
  endDate: {
    type: String,
    default: null,
  },
};
