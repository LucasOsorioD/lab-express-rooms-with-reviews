const { Schema, Types, model } = require("mongoose");

const userSchema = new Schema({
  name: { type: String },
  email: { type: String },
  passwordHash: { type: String },
  rooms: [{ type: Types.ObjectId, ref: "Product" }],
  reviews: [{type: Types.ObjectId, ref: "Review"}]
});

module.exports = model("User", userSchema);