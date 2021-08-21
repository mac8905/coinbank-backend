import { TransactionType } from "../config";

export interface ITransaction {
  coinSymbol: string;
  type: TransactionType;
  emailAddress: string;
  numberOfCoins: number;
  createdAt?: Date;
}
