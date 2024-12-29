import { Router } from "express";
import { authorize } from "../middleware/authorize";

const userRoutes = Router();

userRoutes.get("/profile", authorize("Admin"), (request, response) => {
  response.send("Hello, user!");
});

export default userRoutes;
