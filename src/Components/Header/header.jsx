import React, { useState, useEffect } from "react";
import logo from "./../../img/icons/logo.png";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Проверяем, есть ли токен в localStorage
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // Функция для выхода из системы
  const handleLogout = () => {
    // Здесь должна быть логика выхода из системы
    // Например, удаление токена из localStorage и обновление состояния
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header_row">
          <NavLink key="/" className="header_logo" to="/">
            <img src={logo} alt="logo" />
          </NavLink>
          <div className="header_nav">
            <ul>
              <li>
                <NavLink key="/" to="/">Главная</NavLink>
              </li>
              <li>
                <NavLink key="/about" to="/about">О нас</NavLink>
              </li>
              <li>
                <NavLink key="/service" to="/service">Услуги</NavLink>
              </li>
              <li>
                <NavLink key="/contact" to="/contact">Контакты</NavLink>
              </li>
              {/* Проверяем, авторизован ли пользователь */}
              {!isAuthenticated? (
                <li>
                  <NavLink key="/login" to="/login" onClick={handleLogout}>Войти</NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink key="/profile" to="/profile">Личный кабинет</NavLink>
                  </li>
                  <li>
                    <button onClick={handleLogout} className="header_nav-btn">Выйти</button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
