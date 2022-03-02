const mongoose = require("mongoose");

//user schema
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 2,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    //    phoneNumber:{

    //     type:Number,
    //     require:true,
    //     min:3
    //    },

    password: {
      type: String,
      require: true,
      min: 2,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
