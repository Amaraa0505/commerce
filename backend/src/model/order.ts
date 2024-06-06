import { Model, Schema, model } from "mongoose";

const schemaOrder = new Schema({
  orderId: {
    type: Number,
    require: true,
  },

  user: {
    gmail: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
  },
  date: {
    type: Date,
  },
  pay: {
    type: Number,
  },
});

const Order = model("Order", schemaOrder);

export default Order;
