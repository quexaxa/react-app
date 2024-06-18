import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // Импорт NavLink
import './RequestsList.css';

const RequestsList = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/feedback/feedback');
        if (!response.ok) {
          throw new Error('Ошибка при получении данных запросов');
        }
        const data = await response.json();
        setRequests(data);
        setLoading(false);
      } catch (error) {
        setError('Ошибка при загрузке запросов');
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const deleteRequest = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/feedback/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Ошибка при удалении запроса');
      }
      // Успешное удаление: обновляем список запросов, исключив удаленный
      setRequests(requests.filter(request => request._id !== id));
      alert('Запрос успешно удален');
    } catch (error) {
      setError('Ошибка при удалении запроса');
    }
  };

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div className="requests-list">
      <h1>Список запросов</h1>
      <table>
        <thead>
          <tr>
            <th>Пользователь</th>
            <th>Категория</th>
            <th>Статус</th>
            <th>Описание</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {requests.length > 0 ? (
            requests.map(request => (
              <tr key={request._id}>
                <td>{request.user?.firstName || 'Не указан'}</td>
                <td>{request.category?.name || 'Не указана'}</td>
                <td>{request.status?.name || 'Не указан'}</td>
                <td>{request.description}</td>
                <td>
                  <NavLink to={`/editRequest/${request._id}`}>
                    <button>Редактировать</button>
                  </NavLink>
                  <button onClick={() => deleteRequest(request._id)}>Удалить</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">Нет доступных запросов</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RequestsList;
