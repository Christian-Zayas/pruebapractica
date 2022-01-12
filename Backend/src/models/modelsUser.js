const { Schema, model } = require("mongoose");

const User = new Schema(
  {
    name: { type: String},
    lastNameFather: { type: String },
    lastNameMother: { type: String },
    Direction: { type: String },
    phone: { type: Number }
  },
  {
    timestamps: true,
    versionKey: false
  }
);


module.exports = model("users", User);
