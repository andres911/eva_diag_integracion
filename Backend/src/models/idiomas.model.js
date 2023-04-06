const mongoose = require("mongoose");
const { Schema } = mongoose;

const IdiomaSchema = new Schema(
  {
    descripcion: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Idiomas", IdiomaSchema);
