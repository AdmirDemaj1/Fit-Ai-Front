import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = 'http://localhost:5000/api';


const register = (userData) => axios.post(`${API_URL}/auth/register`, userData);

const login = async (userData, navigate) => {
    
    try {
        const response = await axios.post(`${API_URL}/auth/login`, userData);
        console.log(response)
     
        localStorage.setItem('token', response.data.token);

        navigate('/diet');
      } catch (error) {
        console.error('Login error:', error);
        toast.error('Login failed. Please try again.');
      }
};

const generateDietPlan = (dietData, token) => axios.post(`${API_URL}/diet/generate`, dietData, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
const getDietPlan = (token) => axios.get(`${API_URL}/diet`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export { register, login, generateDietPlan, getDietPlan };