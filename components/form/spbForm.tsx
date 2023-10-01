import { useForm } from "react-hook-form";
import { useFormState } from "./formContext";
import styles from "./cityForm.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "../buttons/button";
import { useState } from "react";
import { pointYandexGoal } from "@/lib/utils";

type TFormValues = {
  where: any;
};
const SpbForm = () => {
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
        <label htmlFor='spb'>
          <div>
            <input
              type='button'
              id='spb'
              {...register("where", { value: "Санкт-Петербург" })}
              className={styles.hidden}
            />
            <div className={styles.container}>
              <h3 className={styles.city}>
                Россия и<br />
                Санкт-Петербург:
              </h3>
              <div className={styles.contacts}>
                <a href='tel:+78129200499' className={styles.phone} onClick={() => pointYandexGoal('клик по номеру телефона СПБ')}>
                  <Image
                    src={"/images/backCall.svg"}
                    alt={""}
                    width={22}
                    height={22}
                  />
                  <p className={styles.text}>+7 (812) 920-04-99</p>
                </a>

                <div className={styles.socials}>
                  <Link href={"https://t.me/tok_mebel"} target='_blank' onClick={() => pointYandexGoal('переход в Telegram СПБ')}>
                    <Image
                      src={"/images/socials/telegram.svg"}
                      alt={""}
                      width={24}
                      height={24}
                    />
                  </Link>
                  <Link
                    href={"https://api.whatsapp.com/message/LDWQN6INLQKID1"}
                    target='_blank'
                    onClick={() => pointYandexGoal('переход в Whattsapp СПБ')}
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
                type={"submit"}
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

export default SpbForm;
