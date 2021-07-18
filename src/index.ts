import express, { Application, Request, Response } from "express";

const app: Application = express();

app.get("/ping", (_req: Request, res: Response) => {
  res.send({ message: "pong" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
