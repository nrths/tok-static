import { useForm } from "react-hook-form";
import { useFormState } from "./formContext";
import styles from "./cityForm.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "../buttons/button";
import { pointYandexGoal } from "@/lib/utils";

type TFormValues = {
  where: any;
};
const MoscowForm = () => {
  // const [checked, setChecked] = useState(false);
  const { onHandleNext, setFormData, formData } = useFormState();
  const { register, handleSubmit } = useForm<TFormValues>({
    defaultValues: formData,
  });

  const onHandleFormSubmit = (data: TFormValues) => {
    setFormData((prev: any) => ({ ...prev, ...data }));
    onHandleNext();
    console.log(data);
  };

  return (
    <>
      <form>
        <label htmlFor='msk'>
          <div>
            <input
              type='button'
              id='msk'
              {...register("where", { value: "Москва" })}
              className={styles.hidden}
            />
            <div className={styles.container}>
              <h3 className={styles.city}>
                Москва и<br />
                Московская область:
              </h3>
              <div className={styles.contacts}>
                <a href="tel:+79111003777" className={styles.phone} onClick={() => pointYandexGoal('клик по номеру телефона МСК')}>
                  <Image
                    src={"/images/backCall.svg"}
                    alt={""}
                    width={22}
                    height={22}
                  />
                  <p className={styles.text}>+7 (911) 100-37-77</p>
                </a>
                <div className={styles.socials}>
                  <Link href={"https://t.me/tokmsk"} target='_blank' onClick={() => pointYandexGoal('переход в Telegram МСК')}>
                    <Image
                      src={"/images/socials/telegram.svg"}
                      alt={""}
                      width={24}
                      height={24}
                    />
                  </Link>
                  <Link
                    href={"https://api.whatsapp.com/send/?phone=79111003777"}
                    target='_blank'
                    onClick={() => pointYandexGoal('переход в Whatsapp МСК')}
                  >
                    <Image
                      src={"/images/socials/whattsup.svg"}
                      alt={""}
                      width={24}
                      height={24}
                    />
                  </Link>
                </div>
              </div>
              <Button
                type={"button"}
                onClick={handleSubmit(onHandleFormSubmit)}
                className={styles.backCallButton}
              >
                <p className={styles.buttonText}>заказать звонок</p>
              </Button>
            </div>
          </div>
        </label>
      </form>
    </>
  );
};

export default MoscowForm;
