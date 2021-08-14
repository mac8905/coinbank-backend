import { Get, Route, Path } from "@tsoa/runtime";
import { db } from "../config";

@Route("coins")
export default class CoinController {
  @Get()
  getAll() {
    return [{ message: db.host }];
  }

  @Get(":coinId")
  getById(@Path() coinId: string) {
    return { message: coinId };
  }
}
