import { StatusCodes } from "http-status-codes";
import brevoApi from "sib-api-v3-sdk";
import validator from "validator";

const sendEmail = async (req, res) => {
  const { name, lastname, email, message } = req.body;

  if (!name || !email || !message) {
  }
};
