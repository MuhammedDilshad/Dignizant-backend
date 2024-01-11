import express from "express";

const router = express.Router();

import formController from "../controllers/userController.js";

router.post("/googleForm", formController);

export default router;
