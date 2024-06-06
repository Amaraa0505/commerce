import { Schema, model } from "mongoose";

const schemaUser = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    minlenght: 6,
  },
  role: {
    type: String,
    enum: [`User`, `Admin`],
    default: `User`,
  },
  otp: {
    type: String,
    default: "",
  },
  phone: Number,
});

const User = model("User", schemaUser);
export default User;
