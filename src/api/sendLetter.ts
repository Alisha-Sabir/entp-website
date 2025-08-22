// pages/api/sendEmail.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import * as fs from "fs";
import * as path from "path";

// Define the type for the request body
interface EmailData {
  Name: string;
  SurName: string;
  email: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { Name, SurName, email }: EmailData = req.body;

    // const filePath = path.join("C:", "Users", "aks", "Documents", "subscribers.txt");

    // Configure the SMTP transport
    const transporter = nodemailer.createTransport({
      host: "entterprice-com.mail.protection.outlook.com",
      port: 25,
      secure: false,
      auth: {
        user: "alishay717@gmail.com",
        pass: "Alisha3326.*",
      },
    });

    // Configure the email options
    const mailOptions = {
      from: "info@entterprice.com",
      to: email,
      subject: "Subscription Confirmation",
      text: `Dear ${Name} ${SurName},

      Thank you for subscribing to our newsletter! We're excited to have you on board.
      
      You'll now receive the latest updates and news directly to your inbox.

      To manage your subscription, please visit our website at entterprice.com.

      If you have any questions or need further assistance, feel free to reach out.

      Best regards,
      Entterprice`,
    };

    try {
      await transporter.sendMail(mailOptions);

      // const userData = `Email : ${email}`;
      // fs.appendFileSync( filePath, userData);

      res.status(200).json({
        message: "Subscription confirmation email sent successfully!",
      });
    } catch (error) {
      res.status(500).json({ message: "Error sending email", error });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
