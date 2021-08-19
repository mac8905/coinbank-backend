import { Router, Request, Response } from "express";
import AccountController from "../controllers/account.controller";

const accountsRoute = Router();
const controller = new AccountController();

accountsRoute.post("/deposit", async (req: Request, res: Response) => {
  const response = await controller.deposit(req.body);
  return res.json(response);
});

accountsRoute.post("/withdrawal", async (req: Request, res: Response) => {
  const response = await controller.withdrawal(req.body);
  return res.json(response);
});

export default accountsRoute;
