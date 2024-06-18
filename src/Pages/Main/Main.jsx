import experience from "./../../img/icons/experience.png";
import company from "./../../img/icons/company.png";
import clients from "./../../img/icons/clients.png";
import "./main.css";
import { NavLink } from "react-router-dom";

import Banner from "../../Components/Banner/Banner"
import CompanyList from "../../Components/CompanyList/company"

const Main = () => {
  return (
    <div className="MainPage">
      <Banner />
      <CompanyList />
      <section className="why-lease">
        <div className="container">
          <h2 className="section-title">Почему мы?</h2>
          <ul className="why-lease__list">
            <li className="why-lease__item">
              <img
                className="why-lease__item-img"
                src={experience}
                alt="experience"
              />
              <h3 className="why-lease__item-title">20+</h3>
              <p className="why-lease__text">Лет работаем для вас</p>
            </li>

            <li className="why-lease__item">
              <img
                className="why-lease__item-img"
                src={company}
                alt="company"
              />
              <h3 className="why-lease__item-title">250+</h3>
              <p className="why-lease__text">Завершенных компаний</p>
            </li>

            <li className="why-lease__item">
              <img className="why-lease__item-img" src={clients} alt="client" />
              <h3 className="why-lease__item-title">1000+</h3>
              <p className="why-lease__text">Довольных клиентов</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="how-does">
        <div className="container">
          <div className="how-does__inner">
            <h2 className="section-title">Как мы работаем?</h2>
          </div>
          <p className="how-does__text">
            Здесь описываются основные этапы сотрудничества с клиентами: от
            анализа и разработки стратегии наружной рекламы до создания дизайна
            и реализации кампании с последующим мониторингом ее эффективности.
          </p>

          <h4 className="how-does__title">Краткое описание нашей работы</h4>

          <ol className="how-does__list">
            <li className="how-does__item">
              Мы начинаем с тщательного анализа вашей целевой аудитории, рынка и
              конкурентов. На основе полученных данных разрабатываем стратегию
              наружной рекламы, которая максимально эффективно донесет ваше
              сообщение до потенциальных клиентов.
            </li>
            <li className="how-does__item">
              Наши креативные специалисты создают уникальные и запоминающиеся
              рекламные макеты. Мы учитываем все особенности размещения и
              форматы носителей, чтобы ваша реклама выглядела привлекательно и
              заметно, даже в самых оживленных местах.
            </li>
            <li className="how-does__item">
              Мы занимаемся полным циклом реализации рекламной кампании: от
              согласования мест размещения до монтажа конструкций. После запуска
              рекламы мы проводим регулярный мониторинг эффективности и
              предоставляем подробные отчеты, чтобы вы всегда были в курсе
              результатов вашей кампании.
            </li>
          </ol>
          <NavLink to="/feedback">
            <button className="how-does__button">Связаться с нами</button>
          </NavLink>
          <p className="how-does__text"></p>
        </div>
      </section>

      <section className="video">
        <div className="container">
          <h2 className="section-title video__title">Добро пожаловать в РБЦ</h2>
          <iframe
            className="video__contant"
            src="https://vk.com/video_ext.php?oid=-83254217&id=456239088&hd=2"
            width="1000"
            height="500"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Main;
