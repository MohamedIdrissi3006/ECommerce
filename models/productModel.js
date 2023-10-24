const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    productName: { type: String, trim: true },
    productPrice: { type: Number },
    description: { type: String, trim: true },

  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;