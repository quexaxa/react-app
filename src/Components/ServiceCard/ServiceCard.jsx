// src/components/ServiceCard.jsx
import React from 'react';
import './servicecard.css'

const ServiceCard = ({ service }) => {
  // Получаем доступ к свойству name объектов category и subCategory
  const categoryName = service.category? service.category.name : 'Неизвестно';
  const subCategoryName = service.subCategory? service.subCategory.name : 'Неизвестно';

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
      <h2>{service.title}</h2>
      <p>{service.description}</p>
      <p>Цена: {service.price} руб.</p>
      <img src={service.imageUrl || 'https://via.placeholder.com/150'} alt={service.title} style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
      <p>Категория: {categoryName}</p>
      <p>Подкатегория: {subCategoryName}</p>
    </div>
  );
};

export default ServiceCard;
