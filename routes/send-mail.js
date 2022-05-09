const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


//----- send mail function -----//
router.post('/sendMail', function(req, res) {
    console.log(process.env.MAIL_USER);
    const transporter = nodemailer.createTransport({
        host: 'mail.privateemail.com',
        port: 465,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        },
        secure: true
    });


    const mailOptions = {
        to: process.env.MAIL_USER,
        from: process.env.MAIL_USER,
        subject: 'Contact Form | DaineMarshall.com',
        text: req.body.contactName + ' ' + req.body.contactEmail + ' ' + req.body.contactMessage
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log('errors', err.message);
            return res.redirect('/#contact');
        }
        res.redirect('/#contact');
        //alert('Thank You ' + req.body.name + ', your message has been sent')
    });



});





module.exports = router;


