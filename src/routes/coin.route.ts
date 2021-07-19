import { Router, Request, Response } from "express";
import CoinController from "../controllers/coin.controller";

const coinsRoute = Router();

coinsRoute.get("/", async (_req: Request, res: Response) => {
  const controller = new CoinController();
  const response = await controller.getAll();
  return res.send(response);
});

coinsRoute.get("/coinId", async (req: Request, res: Response) => {
  const controller = new CoinController();
  const response = await controller.getById(req.params.coinId);
  return res.send(response);
});

export default coinsRoute;
