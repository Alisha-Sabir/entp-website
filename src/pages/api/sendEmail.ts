// pages/api/sendEmail.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

// Define the type for the request body
interface EmailData {
  FirstName: string;
  LastName: string;
  email: string;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { FirstName, LastName, email, message }: EmailData = req.body;

    console.log("req", req.body);

    // Configure the SMTP transport
    const transporter = nodemailer.createTransport({
      host: "entterprice-com.mail.protection.outlook.com",
      port: 25,
      secure: false,
      auth: {
        // user: process.env.SMTP_USER,
        // pass: process.env.SMTP_PASS,
        user: "shafiq.sarwar@entterprice.com",
        pass: "cgwcghddhllslwfc",
        // user: "noreply@entterprice.com",
        // pass: "wSy$tem@321*",
      },
    });

    // Configure the email options
    // const mailOptions = {
    //   from: email,
    //   // to: "alisha.sabir@entterprice.com",
    //   to: [
    //     "marketing@entterprice.com",
    //     "info@entterprice.com",
    //     "noreply@entterprice.com",
    //   ],
    //   subject: "New Contact Form Submission",
    //   text: `You have a new contact form submission: \nFirst Name: ${FirstName} \nLast Name: ${LastName} \nEmail: ${email} \nMessage: ${message}`,
    // };

    const mailOptions = {
      // from: `"${FirstName} ${LastName}" <shafiq.sarwar@entterprice.com>`, // your domain
      from: email,
      // replyTo: email, // user’s email
      // to: [
      //   "marketing@entterprice.com",
      //   "info@entterprice.com",
      //   "noreply@entterprice.com",
      // ],
      to: "shafiq.sarwar@entterprice.com",
      subject: "New Contact Form Submission",
      text: `You have a new contact form submission:
First Name: ${FirstName}
Last Name: ${LastName}
Email: ${email}
Message: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      res.status(500).json({ message: "Error sending email", error });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
