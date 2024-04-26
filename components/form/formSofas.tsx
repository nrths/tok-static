import { useForm } from "react-hook-form";
import styles from "./form.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { FC, useState } from "react";
import axios from "axios";

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

const FormSofas: FC<TFormProps> = ({ id, mobile }) => {
  const [successContact, setSuccessContact] = useState(false);
  const phoneRegExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Введите Ваше имя"),
    phone: Yup.string().matches(phoneRegExp, {
      message: "Введите корректный номер телефона",
      excludeEmptyString: false,
    }),
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
      await axios.post("https://www.tok-mebel.ru/api/send-form-sofas", data);
    // await axios.post("http://localhost:3000/api/send-form-sofas", data);
    } catch (error) {
      console.log("Sending error", error);
    }
  }

  const onHandleFormSubmit = async (contacts: any) => {
    // console.log(contacts);
    sendForm(contacts);
    setSuccessContact(true);

    setTimeout(() => setSuccessContact(false), 1000);
    setTimeout(() => reset(), 2000)
  };

  return (
    <>
      <form
        className={`${styles.formSofas}`}
        onSubmit={handleSubmit(onHandleFormSubmit)}
        noValidate
        id={id}
      >
        <h3 className={styles.formSofasTitle}>создать свою конфигурацию</h3>
        <span className={styles.formSofasDescription}>Заполните форму, чтобы наш менеджер смог связаться с Вами</span>
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
        </div>

        <div
          className={`${styles.buttonContainer} ${styles.contactButtonContainer}`}
        >
          {id === "config" && (
            <button className={`${styles.button} ${styles.buttonConfig}`} type='submit'>
              отправить
            </button>
          )}
          {successContact && (
            <small className={styles.success}>
              Ваше письмо успешно отправлено
            </small>
          )}
        </div>
      </form>
    </>
  );
};

export default FormSofas;
