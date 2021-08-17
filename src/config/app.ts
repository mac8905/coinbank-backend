import express, { Application } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import routes from "../routes";

const app: Application = express();

app.use(morgan("tiny"));
app.use(routes);
app.use(express.static("public"));
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

export { app };
