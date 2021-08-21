import { model } from "mongoose";
import "../models/transaction.model";
import "../models/balance.model";
import { Collections } from "../config";
import { ITransaction } from "../interfaces";

const TransactionModel = model<ITransaction>(Collections.TRANSACTIONS);
const BalanceModel = model<ITransaction>(Collections.BALANCES);

export class AccountService {
  private currentDate: Date;

  constructor() {
    this.currentDate = new Date();
  }

  async withdrawal(transaction: ITransaction) {
    try {
      const document = new TransactionModel(this.fillTransaction(transaction));
      return await document.save();
    } catch (error) {
      throw new Error(error?.message);
    }
  }

  async deposit(transaction: ITransaction) {
    try {
      const document = new TransactionModel(this.fillTransaction(transaction));
      return await document.save();
    } catch (error) {
      throw new Error(error?.message);
    }
  }

  fillTransaction(transaction: ITransaction): ITransaction {
    transaction.createdAt = this.currentDate;
    return transaction;
  }
}
