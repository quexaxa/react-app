import { NavLink } from "react-router-dom";
import "./aboutme.css";
import Company from "../../Components/CompanyList/company";
import AboutBanner from "../../Components/AboutBanner/AboutBanner"
const AboutCompanyPage = () => {
  return (
    <div className="about">
        <AboutBanner/>
      <section className="about-company">
        <div className="about-list__inner">
          <h4 className="about-list__title">
            Комплекс услуг нашего агентства включает:
          </h4>

          <ol className="about-list">
            <li className="about-list__item">
              Размещение наружной рекламы (щиты 6х3м, брандмауэры, пиллары
              1,4х3м).
            </li>
            <li className="about-list__item">
              Широкоформатную и интерьерную печать.
            </li>
            <li className="about-list__item">
              Наружную рекламу и оформление интерьеров (дизайнерские разработки,
              изготовление и монтаж рекламно-информационных элементов для
              оформления торговых точек, промышленных зданий, муниципальных
              учреждений и культурно-развлекательных центров).
            </li>
            <li className="about-list__item">Сувенирную продукцию.</li>
            <li className="about-list__item">Полиграфию.</li>
          </ol>
          <NavLink to="/service">
            <button className="about-list__button">К каталогу!</button>
          </NavLink>
        </div>
      </section>

      <section className="about-power">
        <h4 className="about-power__title">Наши производственные мощности</h4>
        <p className="about-power__text">
          Общая производственная площадь более 400 кв.м. Лазерный станок с
          рабочим полем 900*600, Фрезерно-гравировальный станок с рабочим полем
          2,2 х 4,15 м, Полноцветная печать (принтер для интерьерной печати с
          разрешением 1440 dpi шириной 1,6м) , Оперативная полиграфия,
        </p>
      </section>

      <section className="about-brands">
        <h4 className="about-brands__title">
          С нами сотруднячают такие компаний как:
        </h4>
      </section>
      <Company />
      <div className="end-btn">
        <NavLink to="/Feedback">
          <button className="about-feedback__btn">Оставить заявку</button>
        </NavLink>
      </div>
    </div>
  );
};

export default AboutCompanyPage;
