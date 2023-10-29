import nodemailer from "nodemailer";
export async function SendEmail(EmailTo, EmailText, EmailSubject) {
  let transporter = nodemailer.createTransport({
    host: "mail.xn--c5b7dta6d.xn--54b7fta0cc",
    port: 465,
    secure: false,
    auth: {
      user: "test@xn--c5b7dta6d.xn--54b7fta0cc",
      pass: "%%M@tiur_23##",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailOptions = {
    from: "Task Manager MERN <test@xn--c5b7dta6d.xn--54b7fta0cc>",
    to: EmailTo,
    subject: EmailSubject,
    text: EmailText,
  };

  return await transporter.sendMail(mailOptions);
}
