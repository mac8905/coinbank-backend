import express, { Application } from "express";
import morgan from "morgan";
import routes from "./routes";

const app: Application = express();

app.use(morgan("tiny"));
app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT);
