import { Router, Request, Response } from "express";
import AccountController from "../controllers/account.controller";

const accountsRoute = Router();

accountsRoute.post("/deposit", async (req: Request, res: Response) => {
  const controller = new AccountController();
  const response = await controller.deposit(req.body);
  return res.send(response);
});

accountsRoute.post("/withdraw", async (req: Request, res: Response) => {
  const controller = new AccountController();
  const response = await controller.withdraw(req.body);
  return res.send(response);
});

export default accountsRoute;
