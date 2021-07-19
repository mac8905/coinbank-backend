import { Router } from "express";
import coinsRoute from "./coin.route";
import accountsRoute from "./account.route";

const routes = Router();

routes.use("/coins", coinsRoute);
routes.use("/accounts", accountsRoute);

export default routes;
