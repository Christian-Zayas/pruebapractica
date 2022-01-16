const { Schema, model } = require("mongoose");

//TODO: Creamos el esquema de usuario, con los campos que necesitamos, y los tipos de datos que tendrán
//TODO: Con sus respectivos validadores
const User = new Schema(
  {
    name: { type: String, trim: true },
    lastNameFather: { type: String, trim: true },
    lastNameMother: { type: String, trim: true },
    Direction: { type: String, trim: true },
    phone: { type: Number, trim: true }
  },
  {
    timestamps: true,
    versionKey: false
  }
);


module.exports = model("users", User);
