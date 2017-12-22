var nodemailer = require('nodemailer');
var config  = require('../config/config');

const  Apply = {

	Apply(req,res){

        var email = req.body.email;
        var phone = req.body.phone || 'No Phone Number';
        var desc  = req.body.desc;
        

        var message = `
            <h4 >
                Email : ${email}
            </h4>
            <h4 >
                Phone : ${phone}
            </h4>
            <p style = 'color:#656565'>${desc}</p>`;


        var transporter = nodemailer.createTransport({
            host: 'mail.sweetvel.com',
            port: 25,
            secure: false, // true for 465, false for other ports
            auth: {
                user: config.SMTP.login, // generated ethereal user
                pass: config.SMTP.password  // generated ethereal password
            },
            tls: {
                rejectUnauthorized: false
            }
        });

		var mailOptions = {
			from: email,
			to: 'sweetvelsweetvel@gmail.com',
			subject: 'User Application',
			html: message
		};

		transporter.sendMail(mailOptions, function(error, info){

			if (error)
                res.status(400).send({ status: 400,  statusText: error ,text : "Ошибка" }),console.log(error);

			else
                res.status(200).send({ status: 200,  statusText: info.response , text : "Отправлено"}),console.log(info.response);


		});

	},

	Apply2(req,res){
		res.send('WORKS2')
	}

}

module.exports = Apply;