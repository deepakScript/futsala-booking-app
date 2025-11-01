import express from "express";
import { registerUser, getAllUsers, loginUser } from "../controllers/userController";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", getAllUsers);

export default router;
