import { Post, Route, Body } from "@tsoa/runtime";

@Route("accounts")
export default class AccountController {
  @Post("/withdraw")
  withdraw(@Body() body: any) {
    throw new Error("Method not implemented.");
  }

  @Post("/deposit")
  deposit(@Body() body: any) {
    throw new Error("Method not implemented.");
  }
}
