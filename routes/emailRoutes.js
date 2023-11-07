import express from "express";
const router = express.Router();

import { sendThanksEmail } from "../controllers/emailController.js";

router.route("/").post(sendThanksEmail);

export default router;
