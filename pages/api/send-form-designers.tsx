
import sendEmail from "@/lib/mail";

export default async function handlerSendDesigner(req: any, res: any) {
	const message = {
		to: 'admin@tokmebel.ru, tokmebel@mail.ru, sales@tok-mebel.ru',
		subject: `[Запрос сотрудничества] tok-mebel от ${req.body.firstName} ${req.body.lastName}.`,
		text: `
            Имя: ${req.body.firstName},
            Фамилия: ${req.body.lastName},
            Телефон: ${req.body.phone},
            E-mail: ${req.body.email},
            Сайт: ${req.body.url},
            Социальная сеть: ${req.body.social},
            Город: ${req.body.city},
            Сообщение: ${req.body.comment}
        `,
	};
	sendEmail(message);
    console.log(req.body)
	console.log(message);
	res.send(`Спасибо за заявку!`);
}