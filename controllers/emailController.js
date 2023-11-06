import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";
import brevoApi from "sib-api-v3-sdk";
import validator from "validator";

const sendThanksEmail = async (req, res) => {
  const { name, lastname, email, message } = req.body;

  if (!name || !email || !message) {
    throw new BadRequestError("Please fill in all required fields!");
  }

  if (!validator.isEmail(email)) {
    throw new BadRequestError("Please provide valid email address");
  }

  const client = brevoApi.ApiClient.instance;

  const apiKey = client.authentications["api-key"];
  apiKey.apiKey = process.env.BREVO_API_KEY;

  const apiInstance = new brevoApi.TransactionalEmailsApi();

  const sender = {
    email: process.env.SENDER_EMAIL,
    name: "SutheeDev",
  };

  const receivers = [
    {
      email: email,
    },
  ];

  const data = await apiInstance.sendTransacEmail({
    sender,
    to: receivers,
    templateId: 1,
    subject: "Thanks for your message!",
  });

  res.status(StatusCodes.OK).json({ data });
};

export { sendThanksEmail };
