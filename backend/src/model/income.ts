import { Schema, model } from "mongoose";

const schemaIncome = new Schema({
  orderId: {
    type: Number,
    required: true,
  },
  pay: {
    type: Number,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  user: {
    email: {
      type: String,
    },

    phone: {
      type: String,
      require: true,
    },
  },
});

const Income = model("Income", schemaIncome);
export default Income;
