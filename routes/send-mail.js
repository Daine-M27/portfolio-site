const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


//----- send mail function -----//
router.post('/sendMail', function(req, res) {
    console.log(req.body.svg);
    if (req.body.svg === '4') {
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
            to: 'dainemarshall@gmail.com',
            from: process.env.MAIL_USER,
            subject: 'Contact Form | DaineMarshall.com',
            text: req.body.contactName + ' ' + req.body.contactEmail + ' ' + req.body.contactMessage
        };
    
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log('errors', err.message);
                res.render('index', { title: 'Daine Marshall - Web Developer', emailStatus: 'false', emailMessage: 'Sorry there was an error sending your message.  Please try again later.' });
            }
            res.render('index', { title: 'Daine Marshall - Web Developer', emailStatus: 'true', emailMessage: 'Email sent successfully, I look forward to speaking with you soon.' });
            //alert('Thank You ' + req.body.name + ', your message has been sent')
        });
        
    } else {
        res.render('index', { title: 'Daine Marshall - Web Developer', emailStatus: 'false', emailMessage: 'Sorry there was an error sending your message.  Please try again later.' });
    }



});





module.exports = router;


