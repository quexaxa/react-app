import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const isAdmin = user?.role?.name === "Администратор"; // Проверяем, является ли пользователь администратором

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:5000/api/user/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка при получении данных пользователя");
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Ошибка при загрузке профиля пользователя");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div className="profile-page">
      <h1>Личный кабинет</h1>
      <img src={user?.avatarUrl || "default-avatar-url.png"} alt="Аватар" />
      <p>
        <strong>Имя:</strong> {user?.firstName}
      </p>
      <p>
        <strong>Фамилия:</strong> {user?.surname}
      </p>
      <p>
        <strong>Email:</strong> {user?.email}
      </p>
      <p>
        <strong>Роль:</strong>{" "}
        {user?.role?.name || "Информация о роли недоступна"}
      </p>

      {/* Кнопки администратора */}
      {isAdmin && (
        <>
          <NavLink to="/adminPanel">
            <button>Панель администратора</button>
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Profile;
