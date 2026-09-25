import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.example.com",
  service: 'gmail',
  auth: {
    user: "asifahmed32c@gmail.com",
    pass: "entc uksp bwik hmhu",
  },
});

export default transporter;