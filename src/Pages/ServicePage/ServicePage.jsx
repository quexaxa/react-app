// src/pages/ServicePage.jsx
import React, { useEffect, useState } from 'react';
import ServiceCard from '../../Components/ServiceCard/ServiceCard';
import './servicepage.css';
import axios from 'axios';

const ServicePage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/service/service'); // Адрес вашего API
        setServices(response.data);
      } catch (error) {
        console.error("Failed to load services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div>
      <h1 className='Service-Title'>Услуги</h1>
      <div className="services-container">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
