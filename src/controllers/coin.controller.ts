import { Get, Route, Path } from "@tsoa/runtime";
import { CoinService } from "../services";

@Route("coins")
export default class CoinController {
  private coinService: CoinService;

  constructor() {
    this.coinService = new CoinService();
  }

  @Get()
  async getAll() {
    return await this.coinService.getAll();
  }

  @Get(":coinId")
  async getById(@Path() coinId: string) {
    return await this.coinService.getById(coinId);
  }
}
