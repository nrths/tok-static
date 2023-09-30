import { useFormState } from "./formContext";
import styles from './form.module.css';

const Success = () => {
  const { formData } = useFormState();
  return (
    <>
      <h2 className={styles.heading}>Ваше обращение отправлено</h2>

      <div className={styles.textContainer}>
        <p className={styles.text}>{formData.name}</p>
        <p className={styles.text}>{formData.phone}</p>
        <p className={styles.text}>{formData.email}</p>
        <p className={styles.text}>{formData.comment}</p>
      </div>
    </>
  );
};

export default Success;
