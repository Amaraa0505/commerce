import { Schema, model } from "mongoose";

const schemaProduct = new Schema({
  name: {
    type: String,
    required: true,
  },
  info: {
    type: String,
  },
  id: {
    type: Number,
    require: true,
  },
  image: {
    type: String,

    default: "no picture",
  },
  price: {
    type: Number,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
  generalType: {
    enum: ["Эмэгтэй", "Эрэгтэй"],
  },
  priced: {
    type: Number,
  },
  addedDate: {
    type: Date,
    default: Date.now,
  },
});

const Product = model("Product", schemaProduct);

export default Product;
