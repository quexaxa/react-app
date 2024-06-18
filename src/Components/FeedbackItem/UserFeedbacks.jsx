import React, { useEffect, useState } from "react";
import { setAuthToken } from "../../utils/Api"; // Импортируем функцию setAuthToken
import "./userfeedback.css";

const UserFeedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const token = localStorage.getItem("token");

        const decodedToken = JSON.parse(atob(token.split(".")[1]));
        const userId = decodedToken._id;

        if (!userId) {
          setError("Пользователь не авторизован");
          setLoading(false);
          return;
        }

        setAuthToken(token, userId);

        const response = await fetch(
          `http://localhost:5000/api/feedback/user/${userId}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error status: ${response.status}`);
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setFeedbacks(data);
        } else {
          console.error("Data returned is not an array:", data);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="feedback-list">
      <h1>Ваши заявки</h1>
      {feedbacks.length > 0 ? (
        feedbacks.map((feedback) => (
          <div className="feedback-item" key={feedback._id}>
            <div className="feedback-item__title">
              <h3>Название запроса: {feedback.title}</h3>
            </div>
            <div className="feedback-item__description">
              <h4>Описание: {feedback.description}</h4>
            </div>
            <div className="feedback-item__service">
              <p>Тип услуги: {feedback.category ? feedback.category.name : "Не указан"}</p>
            </div>
            <div className="feedback-item__status">
              <p>Статус: {feedback.status ? feedback.status.name : "Не указан"}</p>
            </div>
            <p>{feedback.createdAt}</p>
          </div>
        ))
      ) : (
        <p>No feedbacks found.</p>
      )}
    </div>
  );
};

export default UserFeedbacks;
