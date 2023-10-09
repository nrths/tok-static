import { useForm } from "react-hook-form";
import { useFormState } from "./formContext";
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
}

const FormForDesigners:FC<TFormProps> = ({ id, mobile }) => {
  const [success, setSuccess] = useState(false);
  const phoneRegExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Введите Ваше имя"),
    lastName: Yup.string().required("Введите Вашу фамилию"),
    phone: Yup.string().matches(phoneRegExp, {
      message: "Введите корректный номер телефона",
      excludeEmptyString: false,
    }),
    email: Yup.string().email().required("Некорректный e-mail"),
    url: Yup.string().url('Некорректная ссылка'),
    social: Yup.string(),
    comment: Yup.string(),
  });

  const { setFormData } = useFormState();
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, reset, formState: { errors }, } = useForm(formOptions);
  
  async function sendForm(data: any) {
    try {
      await axios.post("https://www.tok-mebel.ru/api/send-form-designers", data);
    } catch (error) {
      console.log("Sending error", error);
    }
  }

  
  const onHandleFormSubmit = (data: any) => {
    setFormData({ ...data });
    sendForm(data);
    setSuccess(true);
    // console.log(data);
    pointYandexGoal('отправлен запрос на сотрудничество')
    reset();
    setTimeout(() => setSuccess(false), 1000)
  };
  return (
    <>
      <form
        className={`${styles.formDesigners}`}
        onSubmit={handleSubmit(onHandleFormSubmit)}
        noValidate
        id={id}
      >
        <h3 className={styles.formTitle}>форма заявки</h3>
        <div>
          <input
            id='firstName'
            {...register("firstName")}
            className={styles.input}
            type='text'
            placeholder='Имя'
          />
          {/* @ts-ignore */}
          <small className={styles.err}>{errors.firstName?.message}</small>

          <input
            id='lastName'
            {...register("lastName")}
            className={styles.input}
            type='text'
            placeholder='Фамилия'
          />
          {/* @ts-ignore */}
          <small className={styles.err}>{errors.lastName?.message}</small>

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

          <input
            id='url'
            {...register("url")}
            className={styles.input}
            placeholder='Сайт'
          />
           {/* @ts-ignore */}
          <small className={styles.err}>{errors.url?.message}</small>

          <input
            id='social'
            {...register("social")}
            className={styles.input}
            placeholder='Соцсеть'
          />
           {/* @ts-ignore */}
          <small className={styles.err}>{errors.social?.message}</small>

          {mobile && <div className={styles.commentWrapper}>
            <p className={styles.comment}>Комментарий</p>
            <textarea
              id='comment'
              {...register("comment")}
              className={`${styles.input} ${styles.textarea}`}
            />
          </div>}
        </div>

        <div className={`${styles.buttonContainer} ${styles.contactButtonContainer}`}>
        <button className={styles.button} type='submit'>отправить</button>
        {success && <small className={styles.success}>Ваше письмо успешно отправлено</small>}
        </div>

        {mobile === false && <div className={styles.commentWrapperDesktopDesigners}>
            <p className={styles.comment}>Комментарий</p>
            <textarea
              id='comment'
              data-id='designers'
              {...register("comment")}
              className={`${styles.input} ${styles.textarea}`}
            />
          </div>}
      </form>
    </>
  );
};

export default FormForDesigners;
