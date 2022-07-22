import express from "express";
import { infouser, login, register, refreshToken, logout } from "../controllers/auth.controller.js";
import { body } from "express-validator";
import { validationResultExpress } from "../middlewares/validationResultExpress.js";
import { requireToken } from "../middlewares/requireToken.js";
import { requireRefreshToken } from "../middlewares/requirerefreshToken.js";
import { bodyLoginValidator, bodyRegisterValidator } from "../middlewares/validatorManager.js";
const router = express.Router();

router.post(
  "/register",
    bodyRegisterValidator,
    register
);

router.post(
  "/login",
bodyLoginValidator, 
  login
);

router.get('/protected',requireToken, infouser);
router.get("/refresh", requireRefreshToken, refreshToken)
router.get("/logout", logout)

export default router;
