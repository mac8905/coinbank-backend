import dotenv from "dotenv";

dotenv.config();

export const coingecko = {
  coins: "https://api.coingecko.com/api/v3/coins",
};

export const db = {
  host: process.env.DB_HOST ?? "",
  name: process.env.BD_NAME ?? "",
};

export const PORT = process.env.PORT || 3000;

export const enum TransactionType {
  DEPOSIT = "deposit",
  WITHDRAWAL = "withdrawal",
}

export const enum Collections {
  BALANCES = "balances",
  TRANSACTIONS = "transactions",
}
