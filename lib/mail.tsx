import mailer from 'nodemailer';

const smtpTransport = mailer.createTransport({
	host: 'smtp.yandex.com',
	port: 465,
	secure: true,
	auth: {
		user: 'admin@tokmebel.ru',
		pass: 'xbzxmtdphfdnscet'
	},
	tls: {rejectUnauthorized: false},
}, {
	from: 'tok-mebel.ru <admin@tokmebel.ru>'
});

const sendEmail = (message: any) => {
    smtpTransport.sendMail(message, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent successfully", info);
        }
        smtpTransport.close();
    });
}

export default sendEmail;