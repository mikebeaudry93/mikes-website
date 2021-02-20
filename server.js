require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");

const port = process.env.PORT || 3001;
const app = express();
app.use(express.json());

app.post("/send", (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var content = ` name: ${name} \n email: ${email} \n message: ${message} `;
  var mail = {
    from: name,
    to: "michaelbeaudry93@gmail.com",
    subject: `${name} has sent you an email.`,
    text: content,
  };

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.GOOGLE_EMAIL,
      pass: process.env.GOOGLE_PASSWORD,
    },
  });

  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/build"));
  app.get("*", (req, res) => {
    res.sendFile(__dirname + "/build/index.html");
  });
}

app.listen(port, () => console.log("server started @ ", port));
