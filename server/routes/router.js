const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");
const formController = require('../controllers/formController');

// console.log("BRIDGE_HEALTH_SITE ",process.env.BRIDGE_HEALTH_SITE)


router.get("/health", (req, res) => {
    res.send({
        data: "I am healthy"
    })
});

router.get("/job", (req, res) => {
    res.send({
        data: "I am getting this job"
    })
});


//save formData
router.post('/submit', formController.submitForm);


// send mail
router.post("/register", (req, res) => {
    console.log("I am ENV File", process.env);

    const { email, username, phone, message } = req.body;

    const EMAIL = process.env.EMAIL || "anandeng187@gmail.com";
    const PASSWORD = process.env.PASSWORD || "vhhmsnrnwshlctdb";

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: EMAIL,
                pass: PASSWORD,
            },
        });

        const mailOptions1 = {
            from: `"Bridge Health" <${EMAIL}>`,
            to: `${username} <${email}>`,
            subject: "Welcome to Bridge Health",
            html: `<p>Dear ${username},</p>
              <p>Thank you for registering on Bridge Health.</p>
              <p>We appreciate your interest and will review your information promptly.</p>
              <p>Our health experts will contact you soon.</p>
              <p>Best regards,<br>Bridge Health</p>`,
        };

        const mailOptions2 = {
            from: `"Bridge Health New User" <${EMAIL}>`,
            to: `New Users Data <leadsbhg@gmail.com>`,
            subject: "New user Query",
            html: `<h4>Name: ${username}</h4>
              <h4>Email Id: ${email}</h4>
              <h4>Mobile No.: ${phone}</h4>
              <h4>Message: ${message}</h4>`,
        };

        const sendEmail = (options) => {
            return new Promise((resolve, reject) => {
                transporter.sendMail(options, (error, info) => {
                    if (error) {
                        console.log("Error: " + error);
                        reject(error);
                    } else {
                        console.log("Email sent: " + info.response);
                        resolve(info);
                    }
                });
            });
        };

        Promise.all([sendEmail(mailOptions1), sendEmail(mailOptions2)])
            .then((results) => {
                res.status(201).json({ status: 201, info: results });
            })
            .catch((error) => {
                console.log("Error: " + error);
                res.status(401).json({ status: 401, error });
            });
    } catch (error) {
        console.log("Error: " + error);
        res.status(401).json({ status: 401, error });
    }
});




module.exports = router;