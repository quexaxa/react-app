import React from "react";
import "./aboutbanner.css";
import Staff from "./../../img/icons/aboutCompany.png";

const AboutCompany = () => {
  return (
    <div className="container">
      <div className="about-company-container">
        <img src={Staff} alt="Company" className="company-image" />
        <div className="text-container">
          <h2>Рекламное агентство «РБЦ»</h2>
          <p>
            на сегодняшний день наше агентство предоставляет полный комплекс
            рекламных услуг в Кургане от наружной рекламы до сувенирной
            продукции. Нашим клиентам нет необходимости налаживать контакты с
            несколькими компаниями, что позволяет экономить время и деньги, а
            также увеличивает эффективность выполнения работ.Рост бизнеса нашего
            клиента и партнера, рост продаж – вот задачи агентства «РБЦ», и мы
            их достигаем!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;