// src/components/CompanyList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCompanies } from '../api';
import '../App.css'; // Import CSS file

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanyData = async () => {
      const data = await fetchCompanies();
      setCompanies(data);
    };
    fetchCompanyData();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>Companies</h1>
      </div>
      <ul>
        {companies.map((company) => (
          <li key={company.id}>
            <Link to={`/companies/${company.id}`}>{company.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyList;
