import { Router } from "express";
import { createuserController } from "./useCases/createUser";

// rota '/users'
const userRouter = Router();
userRouter.post("/", (req, res) => {
  return createuserController.handle(req, res);
});

export { userRouter };
