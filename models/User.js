const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  email: { type: String, require: true },
  password: { type: String, require: true},
  name: { type: String, require: true}, }, {
    timestamps: true
  });

const User = model("User", UserSchema);
module.exports = User;