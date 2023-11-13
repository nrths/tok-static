import { useForm } from "react-hook-form";
import { useFormState } from "./formContext";
import styles from "./form.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { FC, useState } from "react";
import axios from "axios";

type TFormValues = {
  where: string;
  name: string;
  phone: string;
  email?: string;
  comment?: string;
};

type TFormProps = {
  id?: string;
};

const Form: FC<TFormProps> = ({ id }) => {
  const [successBackCall, setSuccessBackCall] = useState(false);
  // const [successContact, setSuccessContact] = useState(false);
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

  const { setFormData, formData } = useFormState();
  const formOptions = {
    defaultValues: formData,
    resolver: yupResolver(validationSchema),
  };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  function sendForm(data: any) {
    try {
      axios.post("https://www.tok-mebel.ru/api/send-form", data);
    } catch (error) {
      console.log("Sending error", error);
    }
  }

  const onHandleFormSubmit = async (data: any) => {
    setFormData((prev: any) => ({ ...prev, ...data }));
    // console.log(data);
    sendForm(data);
    setSuccessBackCall(true);

    setTimeout(() => setSuccessBackCall(false), 1000)
    setTimeout(() => reset(), 2000)
  };
  return (
    <>
      <form
        className={
          id === "backcall" ? `${styles.form}` : `${styles.formContact}`
        }
        onSubmit={handleSubmit(onHandleFormSubmit)}
        noValidate
        id={id}
      >
        <div className={styles.inputsContainer}>
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

          <p className={styles.comment}>Комментарий</p>
          <textarea
            id='comment'
            {...register("comment")}
            className={`${styles.input} ${styles.textarea}`}
          />
        </div>

        <div className={styles.buttonContainer}>
          {id === "backcall" && (
            <button
              className={styles.button}
              type='submit'
              disabled={formState.isSubmitting}
              onSubmit={handleSubmit(onHandleFormSubmit)}
            >
              заказать звонок
            </button>
          )}
          {successBackCall && (
            <small className={styles.success}>
              Ваше письмо успешно отправлено
            </small>
          )}
        </div>
      </form>
    </>
  );
};

export default Form;
