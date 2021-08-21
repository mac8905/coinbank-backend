import { TransactionType } from "../models";

export interface ITransaction {
  coinSymbol: string;
  type: TransactionType;
  emailAddress: string;
  numberOfCoins: number;
  createdAt?: Date;
}
