import express from "express";
import { userRouter } from "./routes";

const app = express();

app.use(express.json());

app.get("/", (_req, res) => res.send("Hello World!"));

app.use("/users", userRouter);

export { app };
