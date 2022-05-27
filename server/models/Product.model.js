const { Schema, Types, model } = require("mongoose");

const roomSchema = new Schema({
  name: { type: String },
  description: { type: String },
  imageUrl: { type: String },
  reviews: [{ type: Types.ObjectId, ref: "Reviews" }],
});

module.exports = model("Product", roomSchema);
