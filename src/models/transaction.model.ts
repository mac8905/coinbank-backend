import { Schema, model } from "mongoose";

enum TransationType {
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
    enum: Object.values(TransationType),
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

const Transation = model("transactions", schema);

export { Transation, TransationType };
