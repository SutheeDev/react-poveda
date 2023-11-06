import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";
import brevoApi from "sib-api-v3-sdk";
import validator from "validator";

const sendEmail = async (req, res) => {
  const { name, lastname, email, message } = req.body;

  if (!name || !email || !message) {
    throw new BadRequestError("Please fill in all required fields!");
  }

  if (!validator.isEmail(email)) {
    throw new BadRequestError("Please provide valid email address");
  }

  res.status(StatusCodes.OK).json({ msg: "Thank you for readching out!" });
};
