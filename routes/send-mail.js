const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

//----- send mail function -----//
router.post('/sendMail', function(req, res) {
    console.log(req.body);
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'dainemarshall@gmail.com',
            pass: 'OmegaRED27#'
        }
    });


    let mailOptions = {
        to: 'dainemarshall@gmail.com',
        from: req.body.contactName + ' ' + req.body.contactEmail,
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


