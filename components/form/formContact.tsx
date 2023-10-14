import { useForm } from "react-hook-form";
import styles from "./form.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { FC, useState } from "react";
import axios from "axios";
import { pointYandexGoal } from "@/lib/utils";

type TFormValues = {
  name: string;
  phone: string;
  email: string;
  comment: string;
};

type TFormProps = {
  id?: string;
  mobile?: boolean;
};

const FormContact: FC<TFormProps> = ({ id, mobile }) => {
  const [successContact, setSuccessContact] = useState(false);
  const phoneRegExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
  const validationSchema = Yup.object().shape({
    where: Yup.string(),
    name: Yup.string().required("Введите Ваше имя"),
    phone: Yup.string().matches(phoneRegExp, {
      message: "Введите корректный номер телефона",
      excludeEmptyString: false,
    }),
    email: Yup.string().email("Некорректный e-mail"),
    comment: Yup.string(),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(formOptions);

  async function sendForm(data: any) {
    try {
      await axios.post("https://www.tok-mebel.ru/api/send-form-contact", data);
    } catch (error) {
      console.log("Sending error", error);
    }
  }

  const onHandleFormSubmit = async (contacts: any) => {
    // console.log(contacts);
    sendForm(contacts);
    setSuccessContact(true);
    // pointYandexGoal('отправлен запрос со страницы контактов')
    reset();

    setTimeout(() => setSuccessContact(false), 1000);
  };

  return (
    <>
      <form
        className={`${styles.formContact}`}
        onSubmit={handleSubmit(onHandleFormSubmit)}
        noValidate
        id={id}
      >
        <h3 className={styles.formTitle}>форма обратной связи</h3>
        <div>
          <input
            id='name'
            {...register("name")}
            className={styles.input}
            type='text'
            placeholder='Имя'
          />
          {/* @ts-ignore */}
          <small className={styles.err}>{errors.name?.message}</small>

          <input
            id='phone'
            {...register("phone")}
            className={styles.input}
            placeholder='Телефон'
          />
          {/* @ts-ignore */}
          <small className={styles.err}>{errors.phone?.message}</small>

          <input
            id='email'
            {...register("email")}
            className={styles.input}
            type='email'
            placeholder='E-mail'
          />
          {/* @ts-ignore */}
          <small className={styles.err}>{errors.email?.message}</small>

          {mobile && <div className={styles.commentWrapper}>
            <p className={styles.comment}>Комментарий</p>
            <textarea
              id='comment'
              {...register("comment")}
              className={`${styles.input} ${styles.textarea}`}
            />
          </div>}
        </div>

        <div
          className={`${styles.buttonContainer} ${styles.contactButtonContainer}`}
        >
          {id === "contact" && (
            <button className={styles.button} type='submit'>
              отправить
            </button>
          )}
          {successContact && (
            <small className={styles.success}>
              Ваше письмо успешно отправлено
            </small>
          )}
        </div>
        {mobile === false && <div className={styles.commentWrapperDesktop}>
            <p className={styles.comment}>Комментарий</p>
            <textarea
              id='comment'
              {...register("comment")}
              className={`${styles.input} ${styles.textarea}`}
            />
          </div>}
      </form>
    </>
  );
};

export default FormContact;
