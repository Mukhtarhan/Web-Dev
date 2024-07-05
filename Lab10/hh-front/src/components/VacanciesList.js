// src/components/VacanciesList.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import { fetchVacanciesByCompany } from '../api';

function VacanciesList() {
  const { id } = useParams(); 
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    // Fetch vacancies for the specific company
    const fetchCompanyVacData = async () => {
      try {
        const data = await fetchVacanciesByCompany(id); 
        setVacancies(data);
      } catch (error) {
        console.error(`Error fetching vacancies for company ${id}:`, error);
      }
    };
    fetchCompanyVacData();
  }, [id]);

  console.log(vacancies, "vacancies");
  return (
    <div>
      <h2>Vacancies for Company {id}</h2>
      <ul>
        {vacancies?.map(vacancy => (
          <li key={vacancy.id}>{vacancy.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default VacanciesList;
