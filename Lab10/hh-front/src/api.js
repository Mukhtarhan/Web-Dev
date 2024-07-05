// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

const api = axios.create({
  baseURL: API_URL,
});

export const fetchCompanies = async () => {
  try {
    const response = await api.get('companies/');
    return response.data;
  } catch (error) {
    console.error('Error fetching companies:', error);
    throw error;
  }
};

export const fetchVacanciesByCompany = async (companyId) => {
  try {
    const response = await api.get(`companies/${companyId}/vacancies`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching vacancies for company ${companyId}: ${error.message}`);
  }
};

export const fetchCompanyVacancies = async (companyId) => {
  try {
    const response = await api.get(`companies/${companyId}/`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching vacancies for company ${companyId}:`, error);
    throw error;
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await api.post('token/', { username, password });
    return response.data;
  } catch (error) {
    throw new Error('Invalid username or password'); // Handle specific errors based on your API response
  }
};