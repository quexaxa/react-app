import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://localhost:5000', // Базовый URL вашего API
});

export const setAuthToken = (token, userId) => {
  if (token) {
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('token', token); // Сохраняем токен в localStorage
    if (userId) {
      localStorage.setItem('userId', userId); // Сохраняем userId в localStorage, если он передан
    }
  } else {
    delete apiClient.defaults.headers.common['Authorization'];
    localStorage.removeItem('token'); // Удаляем токен из localStorage
    localStorage.removeItem('userId'); // Удаляем userId из localStorage
  }
};


export const getServices = async () => {
  try {
    const response = await apiClient.get('/api/service/service');
    return response.data;
  } catch (error) {
    console.error("Failed to load services:", error);
    throw error;
  }
};
