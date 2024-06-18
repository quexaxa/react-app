import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditRequest.css';

const EditRequest = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [request, setRequest] = useState(null);
  const [statuses, setStatuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [description, setDescription] = useState('');
  const [statusId, setStatusId] = useState('');
  const [statusName, setStatusName] = useState('');

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/feedback/${id}`);
        if (!response.ok) {
          throw new Error('Ошибка при получении данных запроса');
        }
        const data = await response.json();
        setRequest(data);
        setDescription(data.description);
        setStatusId(data.status._id);
        setStatusName(data.status.name); // Устанавливаем начальное значение имени статуса из полученных данных
        setLoading(false);
      } catch (error) {
        setError('Ошибка при загрузке запроса');
        setLoading(false);
      }
    };

    const fetchStatuses = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/status/status'); // URL для получения статусов
        if (!response.ok) {
          throw new Error('Ошибка при получении данных статусов');
        }
        const data = await response.json();
        setStatuses(data);
      } catch (error) {
        setError('Ошибка при загрузке статусов');
      }
    };

    fetchRequest();
    fetchStatuses();
  }, [id]);

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/feedback/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description, status: statusId, statusName }), // Включаем statusName в тело запроса
      });
      if (!response.ok) {
        throw new Error('Ошибка при обновлении запроса');
      }
      alert('Запрос успешно обновлен');
      navigate('/requestsList'); // Перенаправляем пользователя обратно к списку запросов
    } catch (error) {
      setError('Ошибка при сохранении изменений');
    }
  };

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div className="edit-request">
      <h1>Редактирование запроса</h1>
      <form>
        <div>
          <label>Описание</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Статус</label>
          <select value={statusId} onChange={(e) => {
              setStatusId(e.target.value);
              setStatusName(e.target.options[e.target.selectedIndex].text); // Обновляем имя статуса при изменении
            }}>
            {statuses.map(status => (
              <option key={status._id} value={status._id}>
                {status.name}
              </option>
            ))}
          </select>
        </div>
        <button type="button" onClick={handleSave}>Сохранить</button>
      </form>
    </div>
  );
};

export default EditRequest;
