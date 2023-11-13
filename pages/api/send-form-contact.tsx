import sendEmail from "@/lib/mail";

export default async function handlerSendContact(req: any, res: any) {
	const message = {
		to: 'admin@tokmebel.ru, tokmebel@mail.ru, sales@tok-mebel.ru',
		subject: `[Запрос контакта] tok-mebel от ${req.body.name}.`,
		text: `
            Имя: ${req.body.name},
            Телефон: ${req.body.phone},
            E-mail: ${req.body.email},
			Город: ${req.body.city},
            Сообщение: ${req.body.comment}
        `,
	};
	sendEmail(message);
    console.log(req.body)
	console.log(message);
	res.send(`Спасибо за заявку!`);
}