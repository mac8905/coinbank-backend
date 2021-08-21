import { model } from "mongoose";
import { TransactionType } from "../models";
import { ITransaction } from "../interfaces";

const Transaction = model<ITransaction>("transactions");

export class AccountService {
  private currentDate: Date;

  constructor() {
    this.currentDate = new Date();
  }

  async withdrawal(transaction: ITransaction) {
    try {
      const tx = new Transaction(this.populateTransaction(transaction));
      return await tx.save();
    } catch (error) {
      throw new Error(error?.message);
    }
  }

  async deposit(transaction: ITransaction) {
    try {
      const tx = new Transaction(this.populateTransaction(transaction));
      return await tx.save();
    } catch (error) {
      throw new Error(error?.message);
    }
  }

  populateTransaction(transaction: ITransaction): ITransaction {
    if (transaction.type === TransactionType.WITHDRAWAL) {
      transaction.numberOfCoins *= -1;
    }

    transaction.createdAt = this.currentDate;
    return transaction;
  }
}
