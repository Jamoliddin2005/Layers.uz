import React from "react";
import classes from "./Section.module.css";
import Box from "./Box";
import { ReactComponent as Approach } from "./svgs/Approach.svg";
import { ReactComponent as Warranty } from "./svgs/Warranty.svg";
import { ReactComponent as Creative } from "./svgs/Creative.svg";
import Translate from "../../../components/Translate/Translate";
function Section() {
  const Services = [
    {
      title: Translate("Гарантия", "Kafolat", "Warranty"),
      desc: Translate(
        "Мы предоставляем 1 год гарантийной поддержки. Выполнение взятых на себя обязательств неоднократно подтверждалось отзывами наших клиентов",
        "Biz 1 yillik kafolatli yordamni taqdim etamiz. Bizning majburiyatlarimiz bajarilishi mijozlarimizning fikr-mulohazalari bilan bir necha bor tasdiqlangan",
        "We provide 1 year warranty support. The fulfillment of our obligations has been repeatedly confirmed by the feedback of our customers"
      ),
      svg: <Warranty />,
      id: 0,
    },
    {
      title: Translate("Творческий", "Ijod", "Creative"),
      desc: Translate(
        "Мы гарантируем эксклюзивный дизайн. Мы делаем все возможное, чтобы привлечь внимание наших клиентов, используя лучшие мировые стратегии",
        "Biz eksklyuziv dizaynni kafolatlaymiz. Biz dunyodagi etakchi strategiyalardan foydalangan holda mijozlarimiz e'tiborini jalb qilish uchun qo'limizdan kelganini qilamiz",
        "We guarantee an exclusive design. We do our best to attract the attention of our customers using the world’s leading strategies"
      ),
      svg: <Creative />,
      id: 1,
    },
    {
      title: Translate("Подход", "Yondashuv", "Approach"),
      desc: Translate(
        "Начиная с переговоров и до завершения процесса вы общаетесь с персональным менеджером проекта",
        "Muzokaralardan boshlab va jarayon tugaguniga qadar siz shaxsiy loyiha menejeri bilan muloqot qilasiz",
        "Starting with negotiations and until the completion of the process, you communicate with a personal project manager"
      ),
      svg: <Approach />,
      id: 2,
    },
  ];

  return (
    <div className={classes.Section}>
      <div className="container">
        <div className={`row ${classes.row}`}>
          {Services.map((item, index) => (
            <Box key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section;
