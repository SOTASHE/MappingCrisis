const mongoose = require("mongoose");

//user schema
const CrisisSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    tag: {
      type: String,
      require: true,
      min: 3,
    },
    desc: {
      type: String,
      require: true,
      min: 3,
    },

    //    locatioCoord:{

    //     type:Number,
    //     require:true,
    //     min:0
    //max: 10
    //    },
    lat: {
      type: Number,
      require: true,
    },
    long: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Crisis", CrisisSchema);
