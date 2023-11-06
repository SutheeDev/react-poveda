import express from "express";
const router = express.Router();

import { sendThanksEmail, test } from "../controllers/emailController.js";

router.route("/").post(sendThanksEmail);
router.route("/").get(test);

export default router;
