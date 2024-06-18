// Footer.js
import React from "react";
import "./footer.css"; // Подключаем стили
import vk from "./../../img/icons/vk.png";
import whatsapp from "./../../img/icons/whatsapp.png";
import telegram from "./../../img/icons/telegram.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer__menu">
          <ul className="footer__menu-list">
            <li className="footer__menu-item">
              <p href="#" className="footer__menu-title">
                Услуги
              </p>
            </li>
            <li className="footer__menu-item">
              <NavLink to="service">
                <a href="#" className="footer__menu-link">
                  Все
                </a>
              </NavLink>
            </li>
            <li className="footer__menu-item">
              <NavLink>
                <a href="#" className="footer__menu-link">
                  Акций
                </a>
              </NavLink>
            </li>
          </ul>

          <ul className="footer__menu-list">
            <li className="footer__menu-item">
              <p href="#" className="footer__menu-title">
                Дополнительно
              </p>
            </li>
            <li className="footer__menu-item">
              <NavLink to = "faq">
                <a href="#" className="footer__menu-link">
                  FAQ
                </a>
              </NavLink>
            </li>
            <li className="footer__menu-item">
              <NavLink to="contact">
                <a href="#" className="footer__menu-link">
                  Наши контакты
                </a>
              </NavLink>
            </li>
          </ul>

          <ul className="footer__menu-list">
            <li className="footer__menu-item">
              <p href="#" className="footer__menu-title">
                О нас
              </p>
            </li>
            <li className="footer__menu-item">
              <NavLink to="about">
                <a href="#!" className="footer__menu-link">
                  О компаний
                </a>
              </NavLink>
            </li>
          </ul>
        </nav>

        <ul className="social__links">
          <li className="social__links-item">
            <a href="https://vk.com/rbc_souvenir" className="social__item-link">
              <img className="socila__item-img" src={vk} alt="vk-link" />
            </a>
          </li>

          <li className="social__links-item">
            <a href="#" className="social__item-link">
              <img
                className="socila__item-img"
                src={whatsapp}
                alt="whatsapp-link"
              />
            </a>
          </li>
          <li className="social__links-item">
            <a href="#" className="social__item-link">
              <img
                className="socila__item-img"
                src={telegram}
                alt="whatsapp-link"
              />
            </a>
          </li>
        </ul>

        <div className="footer__copy">
          <p className="footer__copy-text">
            &copy; 2024 РосБизнесЦентр. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
