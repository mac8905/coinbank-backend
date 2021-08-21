import { AccountService } from "../services";
import { ITransaction } from "../interfaces";

export default class AccountController {
  private accountService: AccountService;

  constructor() {
    this.accountService = new AccountService();
  }

  async withdrawal(transaction: ITransaction) {
    try {
      return await this.accountService.withdrawal(transaction);
    } catch (error) {
      console.log(error.message);
    }
  }

  async deposit(transaction: ITransaction) {
    return await this.accountService.deposit(transaction);
  }
}
