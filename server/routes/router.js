const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");
const formController = require('../controllers/formController');

console.log("BRIDGE_HEALTH_SITE ",process.env.BRIDGE_HEALTH_SITE)


router.get("/health", (req, res) => {
    res.send({
        data: "I am healthy"
    })
});


//save formData
router.post('/submit', formController.submitForm);


// send mail
router.post("/register", (req, res) => {


    const { email, username } = req.body;


    try {


        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });


        const mailOptions = {
            from: `"Bridge Health" <${process.env.EMAIL}>`,
            to: `${username}   <${email}> `,
            subject: "Welcome to Bridge Health",
            html: ` 
            <p>Dear ${username},</p>
            <p>Thank you for registering on <span> <strong>Bridge Health.<strong> <span></p>
            <p>We appreciate your interest and will review your information promptly.</p>
            <p>Our health experts will contact you soon.</p>
            <p>Best regards,<br> <strong>Bridge Health </strong> </p>`
        };


        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Error" + error)
            } else {
                console.log("Email sent:" + info.response);
                res.status(201).json({ status: 201, info })
            }
        })


        const mailOptionsAdmin = {
            from: `"Bridge Health" <${process.env.EMAIL}>`,
            to: `${username}   <${email}> `,
            subject: "Welcome to Bridge Health",
            html: ` 
            <p>Dear ${username},</p>
            <p>Thank you for registering on <span> <strong>Bridge Health.<strong> <span></p>
            <p>We appreciate your interest and will review your information promptly.</p>
            <p>Our health experts will contact you soon.</p>
            <p>Best regards,<br> <strong>Bridge Health </strong> </p>`
        };



        transporter.sendMail(mailOptionsAdmin, (error, info) => {
            if (error) {
                console.log("Error" + error)
            } else {
                console.log("Email sent:" + info.response);
                res.status(201).json({ status: 201, info })
            }
        })


    } catch (error) {
        console.log("Error" + error);
        res.status(401).json({ status: 401, error })
    }
});




module.exports = router;