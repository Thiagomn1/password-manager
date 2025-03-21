import express from "express";
import PasswordController from "../controllers/passwordController";
import authenticate from "../middleware/authenticate";
import checkAuthenticated from "../middleware/checkAuthenticated";

const routes = express.Router();

routes.use(authenticate);

routes.get("/", checkAuthenticated, PasswordController.getSavedPasswords);
routes.get("/:site", checkAuthenticated, PasswordController.getSitePassword);
routes.post(
  "/generate",
  checkAuthenticated,
  PasswordController.generatePassword
);

export default routes;
