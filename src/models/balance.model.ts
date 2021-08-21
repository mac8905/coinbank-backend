import { Schema, model } from "mongoose";
import { IBalance } from "../interfaces";
import { Collections } from "../config";

const schema = new Schema({
  coinSymbol: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    unique: true,
    required: true,
  },
  numberOfCoins: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  updatedAt: {
    type: Date,
  },
});

model<IBalance>(Collections.BALANCES, schema);
