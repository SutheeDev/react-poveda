import express from "express";
const router = express.Router();

import sendThanksEmail from "../controllers/emailController.js";

router.route("/sendThanksEmail").post(sendThanksEmail);

export default router;
