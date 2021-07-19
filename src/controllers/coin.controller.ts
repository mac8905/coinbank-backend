import { Get, Route, Path } from "@tsoa/runtime";

@Route("coins")
export default class CoinController {
  @Get()
  getAll() {
    throw new Error("Method not implemented.");
  }

  @Get(":coinId")
  getById(@Path() coinId: string) {
    throw new Error("Method not implemented.");
  }
}
