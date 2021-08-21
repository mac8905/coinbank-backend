import express, { Application } from "express";
import morgan from "morgan";
import routes from "../routes";

const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(routes);

export { app };
