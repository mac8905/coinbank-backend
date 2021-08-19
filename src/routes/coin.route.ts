import { Router, Request, Response } from "express";
import CoinController from "../controllers/coin.controller";

const coinsRoute = Router();
const controller = new CoinController();

coinsRoute.get("/", async (_req: Request, res: Response) => {
  const response = await controller.getAll();
  return res.json(response);
});

coinsRoute.get("/:coinId", async (req: Request, res: Response) => {
  const response = await controller.getById(req.params.coinId);
  return res.json(response);
});

export default coinsRoute;
