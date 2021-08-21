import { CoinService } from "../services";

export default class CoinController {
  private coinService: CoinService;

  constructor() {
    this.coinService = new CoinService();
  }

  async getAll() {
    return await this.coinService.getAll();
  }

  async getById(coinId: string) {
    return await this.coinService.getById(coinId);
  }
}
