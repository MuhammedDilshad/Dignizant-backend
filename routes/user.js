import express from "express";

const router = express.Router();
// import { formController } from "../controllers/userController.js";
// user.js
import formController from "../controllers/userController.js";

router.post("/googleForm", formController);

// router.post("/googleForm", user);

export default router;
