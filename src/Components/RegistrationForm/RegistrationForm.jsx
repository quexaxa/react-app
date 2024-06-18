import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    avatarUrl: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/register",
        formData
      );
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error.response.data);
      // Обработка ошибок регистрации
    }
  };

  return (
    <div className="register-form-container">
      <form onSubmit={handleSubmit} className="register-form">
        <div>
          <label htmlFor="firstName">Имя:</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="surname">Фамилия:</label>
          <input
            type="text"
            name="surname"
            id="surname"
            value={formData.surname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="avatarUrl">URL аватара:</label>
          <input
            type="text"
            name="avatarUrl"
            id="avatarUrl"
            value={formData.avatarUrl}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Зарегистрироваться</button>
        <Link
          to="/login"
          style={{
            textDecoration: "none",
            display: "inline-block",
            marginTop: "10px",
          }}
        >
          есть аккаунт? Войти
        </Link>
      </form>
    </div>
  );
};

export default RegistrationForm;
