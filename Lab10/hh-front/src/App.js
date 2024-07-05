// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CompanyList from './components/CompanyList';
import CompanyDetail from './components/CompanyDetail';
import Login from './components/Login';
import './App.css'; // Import CSS file
import VacanciesList from './components/VacanciesList';

const App = () => {
  return (
    <Router>
      <div className="container">
        <div className="header">
          <h1>Company Vacancies</h1>
        </div>
        <Routes>
          <Route path="/" element={<CompanyList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/companies/:id" element={<VacanciesList />} />

          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
