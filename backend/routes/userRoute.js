import express from "express";
import {
  registerUser,
  checkUsernameAvailability,
  loginUser,
} from "../controller/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/check-availability", checkUsernameAvailability);

export default router;
