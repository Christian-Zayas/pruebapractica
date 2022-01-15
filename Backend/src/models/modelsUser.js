const { Schema, model } = require("mongoose");

const User = new Schema(
  {
    name: { type: String , trim: true},
    lastNameFather: { type: String, trim: true },
    lastNameMother: { type: String ,trim: true},
    Direction: { type: String , trim: true},
    phone: { type: Number , trim: true }
  }, 
  {
    timestamps: true,
    versionKey: false
  }
);


module.exports = model("users", User);
