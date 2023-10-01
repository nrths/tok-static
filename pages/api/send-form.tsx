import sendEmail from "@/lib/mail";

export default async function handler(req: any, res: any) {
	const message = {
		to: 'admin@tokmebel.ru, tokmebel@mail.ru',
		subject: `[${req.body.where}] Заказ обратного звонка от ${req.body.name}.`,
		text: `
            Имя: ${req.body.name},
            Телефон: ${req.body.phone},
            E-mail: ${req.body.email},
            Сообщение: ${req.body.comment}
        `,
	};
	sendEmail(message);
    console.log(req.body)
	console.log(message);
	res.send(`Спасибо за заявку!`);
}