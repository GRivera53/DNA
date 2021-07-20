const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchame = Schema({
  codigo: Number,
  name: String,
  lastname: String,
  email: {
    type: String,
    unique: true,
  },
  phone: Number,
  birthdate: Date,
  sucursal: String,
  password: String,
  role: String,
  active: Boolean,
  avatar: String,
});

module.exports = mongoose.model("User", UserSchame);
