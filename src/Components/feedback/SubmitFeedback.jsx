import React, { useState, useEffect } from 'react';
import './SubmitFeedback.css';

const SubmitFeedback = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [services, setServices] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('http://localhost:5000/api/user/user', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      credentials: 'include',
    })
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(error => {
        setError('Failed to load user data');
        setLoading(false);
      });

    fetch('http://localhost:5000/api/category/category')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }
        return response.json();
      })
      .then(data => {
        setServices(data);
      })
      .catch(error => {
        setError('Failed to fetch services');
        console.error('Error fetching services:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    const feedbackData = {
      title,
      user: user ? user._id : null,
      category,
      description,
    };

    fetch('http://localhost:5000/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      credentials: 'include',
      body: JSON.stringify(feedbackData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to submit feedback');
        }
        return response.json();
      })
      .then(data => {
        console.log('Feedback submitted:', data);
        setTitle('');
        setCategory('');
        setDescription('');
      })
      .catch(error => {
        console.error('Error submitting feedback:', error);
      });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="submit-feedback-page">
      <h1>Оставить заявку!</h1>
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-group">
          <label htmlFor="title">Название заявки:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Услуги:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Выберите услугу</option>
            {services.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">Описание:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Отправить заявку
        </button>
      </form>
    </div>
  );
};

export default SubmitFeedback;
