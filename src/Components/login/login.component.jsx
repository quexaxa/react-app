import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./loginform.css";
import { setAuthToken } from "../../utils/Api"; // Импортируем функцию setAuthToken

const AuthComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/login",
        {
          email,
          password,
        }
      );

      // Сохраняем токен и userId в localStorage
      localStorage.setItem("token", response.data.token);
      console.log("Токен:", localStorage.getItem("token"));

      // Вызываем функцию setAuthToken для сохранения токена и userId
      setAuthToken(response.data.token);

      navigate("/"); // Переход на главную страницу или другую страницу после успешного входа

      // Обновляем состояние для дальнейшего использования токена и ID пользователя
      setEmail(response.data.email);
    } catch (error) {
      console.error("Ошибка авторизации:", error);
    }
  };

  return (
    <div className="login-form">
      <div className="login-form__input">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="login-form__btn" onClick={handleLogin}>
          Войти
        </button>

        <Link
          to="/register"
          style={{
            textDecoration: "none",
            display: "inline-block",
            marginTop: "10px",
          }}
        >
          Нет аккаунта? Зарегистрироваться
        </Link>
      </div>
    </div>
  );
};

export default AuthComponent;
