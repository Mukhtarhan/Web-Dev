// src/components/CompanyDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCompanyVacancies } from '../api';
import '../App.css'; // Import CSS file

const CompanyDetail = () => {
  const { id } = useParams();
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    const fetchVacancies = async () => {
      const data = await fetchCompanyVacancies(id);
      setVacancies(data);
    };
    fetchVacancies();
  }, [id]);

  return (
    <div className="container">
      <div className="header">
        <h1>Vacancies</h1>
      </div>
      <ul>
        {vacancies.map((vacancy) => (
          <li key={vacancy.id}>
            <h2>{vacancy.name}</h2>
            <p>{vacancy.description}</p>
            <p>Salary: ${vacancy.salary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyDetail;
