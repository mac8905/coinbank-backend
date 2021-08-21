import { Schema, model } from "mongoose";
import { ITransaction } from "../interfaces";

enum TransactionType {
  DEPOSIT = "deposit",
  WITHDRAWAL = "withdrawal",
}

const schema = new Schema({
  coinSymbol: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: Object.values(TransactionType),
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

model<ITransaction>("transactions", schema);

export { TransactionType };
