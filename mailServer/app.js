const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const details = require("./details.json");

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("The server started on port 3000 !!!!!!");
});

app.post("/sendMail", (req, res) => {
  console.log("request came");
  let user = req.body;
  sendMail(user, info => {
    console.log(`The mail has beed send 😃 and the id is ${info.messageId}`);
    res.send(info);
  });
});

async function sendMail(user, callback) {
  // create reusable transporter object using the default SMTP transport
  let emailTransporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: details.email,
      pass: details.password
    }
  });

  let mailOptions = {
    from: '"Fun Of Heuristic"<example.gimail.com>', // sender address
    to: user.email, // list of receivers
    subject: "Wellcome 👻", // Subject line
    html: `<h1>Hi ${user.name} ${user.surname}</h1><br>
    <p> ${user.comment}</p>
    <h4>Thanks for joining us</h4>`
  };

  // send mail with defined transport object
  let info = await emailTransporter.sendMail(mailOptions);

  callback(info);
}

app.post("/getMail", (req, res) => {
    console.log("request came");
    let user = req.body;
    sendMail(user, info => {
      console.log(`The mail has beed send 😃 and the id is ${info.messageId}`);
      res.send(info);
    });
  });
  
  async function sendMail(user, callback) {
    // create reusable transporter object using the default SMTP transport
    let emailTransporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: details.email,
        pass: details.password
      }
    });
  
    let mailOptions = {
      from: '"Fun Of Heuristic"<example.gimail.com>', // sender address
      to: details.email, // list of receivers
      subject: "Wellcome 👻", // Subject line
      html: `<h1>Hi ${user.name} ${user.surname}</h1><br>
      <p> ${user.comment}</p>
      <h4>Thanks for joining us</h4>`
    };
  
    // send mail with defined transport object
    let info = await emailTransporter.sendMail(mailOptions);
  
    callback(info);
  }
