import { Schema, model } from "mongoose";
import { ITransaction } from "../interfaces";
import { TransactionType, Collections } from "../config";

const schema = new Schema({
  coinSymbol: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: [TransactionType.DEPOSIT, TransactionType.WITHDRAWAL],
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
  },
  numberOfCoins: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
});

model<ITransaction>(Collections.TRANSACTIONS, schema);
