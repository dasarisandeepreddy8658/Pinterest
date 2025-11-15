import express from "express";
import { followAndUnfollowUser, loginUser, logOutUser, myProfile, registerUser, userProfile } from "../controllers/userController.js";
import { isAuth } from "../middleware/isAuth.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", isAuth, logOutUser);
router.get("/me", isAuth, myProfile);
router.post("/follow/:id", isAuth, followAndUnfollowUser);
router.get("/:id", isAuth, userProfile);

export default router;
