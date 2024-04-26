import sendEmail from "@/lib/mail";

export default async function handlerSendContact(req: any, res: any) {
	const message = {
		to: 'admin@tokmebel.ru, sales@tok-mebel.ru',
        // to: 'admin@tokmebel.ru',
		subject: `[Запрос на конфигурацию дивана] tok-mebel от ${req.body.name}.`,
		text: `
            Имя: ${req.body.name},
            Телефон: ${req.body.phone}
        `,
	};
	sendEmail(message);
    console.log(req.body)
	console.log(message);
	res.send(`Спасибо за заявку!`);
}